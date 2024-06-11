# mugic_bow_app

## notes and comments
Think it's better to do with React so that in the future we can simply run this on a webpage too

## Prerequisites
```
node -v
npm -v
```

## Tools
```
react
maybe bootstrap for the design?
```

## setup run
```
./setup.sh
```

## dev mode
for most of the dev process we will use browser version, this opens up on localhost port 3000
```
cd app/
npm start
```

## prod mode
this runs the web version onto the desktop app
```
./run.sh
```

Run the following commands and you will build executables in your root directory of each specific platform with an icon

- for mac run `npx electron-packager ./ --platform=darwin --icon=./build-icons/MUGIC-MEOW-MEOW-ICON.icns`
- for windows run `npx electron-packager ./ --platform=win32 --arch=x64 --icon=./app/src/assets/images/mugic_logo.ico`