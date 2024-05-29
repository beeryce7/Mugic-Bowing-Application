const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const url = require('url');
const path = require('path');
const osc = require('node-osc');
const fs = require('fs');

const oscAvailableIPRange = "0.0.0.0";
const addressPortMUGIC = 4000;
const minPollDelay = 0;
var oscServer = 0;

var mugicData = []

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

    return mainWindow
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    var mainWindow = createMainWindow()

    var lastPoll = performance.now()
  
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })

    ipcMain.on('save-file', handleSaveFile)
    ipcMain.handle('load-file', handleLoadFile)
    ipcMain.handle('retrieve-mugic', handleRetrieveMugicData)

    // Start communication with MUGIC device
    let isConnected = false;

    function openAndListenToMugic(addressPortMUGIC, oscAvailableIPRange, retryInterval = 2000, maxRetries = 3) {
      let retryCount = 0;
      let isConnecting = false; // Track if a connection attempt is ongoing

      function connect() {
        if (isConnecting){
          return; // Don't start a new connection if one is ongoing
        } 

        isConnecting = true;

        oscServer = new osc.Server(addressPortMUGIC, oscAvailableIPRange, () => {
          console.log("Attempting Connection to Mugic")
          
        });

        console.log("Server info:\n")
        console.log(oscServer)

        oscServer.on('error', function (err) {
          isConnecting = false;
          console.log('Error')
          console.log(err);
          mugicData = err //need to see if this works, havent tested
          retryConnection(err);
        });

        oscServer.on('message', function (msg, rinfo) {
          if(isConnected == false){

            isConnected = true;
            console.log("Successfully Connected to MUGIC")
          }

          if (performance.now() - lastPoll >= minPollDelay)
          {
            lastPoll = performance.now()
            mugicData = msg
          }
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
        connect(); // Initial connection attempt
      }
      catch(err){
        retryConnection(err)
      }
    }

    openAndListenToMugic(4000, "0.0.0.0")
  })


  // Quit when all windows are closed, except on macOS. There, it's common
  // for applications and their menu bar to stay active until the user quits
  // explicitly with Cmd + Q.
  app.on('window-all-closed', () => {

    oscServer.close()

    if (process.platform !== 'darwin') app.quit()
    
  })
  
  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.

async function handleSaveFile (event, data) {
  console.log("saving file")

  dialog.showSaveDialog({ 
    title: 'Select path to save recording', 
    defaultPath: path.join(__dirname, '/assets/recording.txt'), 
    buttonLabel: 'Save', 
    filters: [ 
        { 
            name: 'Text Files', 
            extensions: ['txt', 'docx'] 
        }, ], 
    properties: [] 
  }).then(file => { 
    if (!file.canceled) { 
        fs.writeFile(file.filePath.toString(), data, function (err) { 
            if (err){
              throw err; 
            } 
            console.log("Saved at location:" + file.filePath.toString()); 
        }); 
    }
    else{
      console.log("cancelled")
    }
  }).catch(err => { 
    console.log(err) 
  }); 

}

async function handleLoadFile (event, data) {
  console.log("loading file")

  fileInfo = await dialog.showOpenDialog({ 
    title: 'Select recording file to load', 
    defaultPath: path.join(__dirname, '/assets/recording.txt'), 
    buttonLabel: 'Load', 
    filters: [ 
        { 
            name: 'Text Files', 
            extensions: ['txt', 'docx'] 
        }, ], 
    properties: [
      'openFile'
    ] 
  })

  console.log(fileInfo)

  if (!fileInfo.canceled) { //right now is setup synchronously, may cause a moment of lag upon loading a large file
    /*
      fs.readFile(file.filePaths[0], 'utf8', function (err, data) { 
          if (err) {
            throw err; 
          }
          console.log("data loaded: " + data); 
          return data;
      }); 
      */
    var text = fs.readFileSync(fileInfo.filePaths[0], 'utf8')
    console.log("read:" + text)
    
    return {
      cancelled: false,
      message: text,
      fileName: fileInfo.filePaths[0]
    }
  }
  else{
    return {
      cancelled: true,
      message: "",
      fileName: "",
    }
  }
}

async function handleRetrieveMugicData() {
  return mugicData
}