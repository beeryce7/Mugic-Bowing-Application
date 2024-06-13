# UCI INF 117 Spring 24 [mugic_bow_app]

## notes and comments
Current version of the mugic device is wireless (not bluetooth)
\Have to manually connect to the network by switching to the Wireless hotspot MUGICXXXXXXX

The listed files still needs to be improved upon
```
Visualizer.js
LoadedDataVisual.js
```

\A lot of the tools have been build and streamlined in Redux. 

## Tools/library
```
Electron
React js
```

## Prerequisites
```
node -v
npm -v
```

## Common CLI to use for setting up and building the app 
```
./setup.sh # installs the dependencies
./run.sh   # builds the react app and runs it on a desktop application
``` 

## User interface dev mode
for UI develpoment we will use the browser, the command open up a browser on localhost:3000. Any modification on code, will automatically reflect the display on the browser.

```
cd app/
npm start
```


## Run the following commands and you will build executables in your root directory of each specific platform with an icon
- first build current app `npm run build --prefix ./app`
- for mac run `npx electron-packager ./ --platform=darwin --icon=./app/src/assets/images/mugic_logo.icns`
- for windows run `npx electron-packager ./ --platform=win32 --arch=x64 --icon=./app/src/assets/images/mugic_logo.ico`