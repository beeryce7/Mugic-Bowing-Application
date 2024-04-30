const { app, BrowserWindow, ipcMain } = require('electron');
const url = require('url');
const path = require('path');

const osc = require('node-osc');

const oscAvailableIPRange = "0.0.0.0";
const addressPortMUGIC = 4000;


function createMainWindow() {
    mainWindow = new BrowserWindow({
        title: 'MUGIC BOWING',
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: true,
          preload: path.join(__dirname, 'preload.js')
        }
    
    });
    const startUrl = url.format({
        pathname: path.join(__dirname, './app/build/index.html'),
        protocol: 'file',
    });




    mainWindow.loadURL(startUrl);
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createMainWindow()
  
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
    // Start communication with MUGIC device
    let isConnected = false;
    function openAndListenToMugic(addressPortMUGIC, oscAvailableIPRange, retryInterval = 2000, maxRetries = 3) {
      let retryCount = 0;
      let isConnecting = false; // Track if a connection attempt is ongoing

      function connect() {
        if (isConnecting) return; // Don't start a new connection if one is ongoing
        isConnecting = true;

        const oscServer = new osc.Server(addressPortMUGIC, oscAvailableIPRange, () => {
          console.log("listening")
        });
        console.log(oscServer)
        oscServer.on('error', function (err) {
          isConnecting = false;
          console.log('error')
          console.log(err);
          mainWindow.webContents.send('mugic-error', err);
          retryConnection(err);
        });

        oscServer.on('message', function (msg, rinfo) {
          console.log("msg");
          console.log(msg);
          mainWindow.webContents.send('mugic-message', msg);
          resetRetryCount();
        });
      }

      function resetRetryCount() {
        retryCount = 0;
      }

      function retryConnection(err) {
        console.log("Unable to connect to IP address or Port: " + err);
        if (retryCount < maxRetries) {
          retryCount++;
          console.log(`Retrying in ${retryInterval / 1000} seconds (Retry ${retryCount} of ${maxRetries})`);
          setTimeout(() => {
            connect(); // Attempt to connect again after the retry interval
          }, retryInterval);
        } else {
          isConnecting = false;
          console.log('Max retries reached. Could not establish a connection.');
        }
      }
      try {
      console.log("connecting")
      connect(); // Initial connection attempt
      isConnected = true;
      }catch(err){
        retryConnection(err)
      }
    }

    openAndListenToMugic(4000, "0.0.0.0")
  })
  
  // Quit when all windows are closed, except on macOS. There, it's common
  // for applications and their menu bar to stay active until the user quits
  // explicitly with Cmd + Q.
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
  
  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.