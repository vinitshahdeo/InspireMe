const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 100, height: 200});
  mainWindow.loadURL('file://' + __dirname + '/window.html');
});
