const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 0, height: 0});
  mainWindow.loadURL('file://' + __dirname + '/window.html');
});
