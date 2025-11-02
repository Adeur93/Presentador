const { app, BrowserWindow, ipcMain } = require('electron');

function createWindows() {
  const controlWin = new BrowserWindow({ width: 800, height: 600, webPreferences: { nodeIntegration: true, contextIsolation: false } });
  const salidaWin = new BrowserWindow({ width: 1024, height: 768, webPreferences: { nodeIntegration: true, contextIsolation: false } });

  controlWin.loadFile('src/control/index.html');
  salidaWin.loadFile('src/salida/index.html');
}

app.whenReady().then(createWindows);

ipcMain.on('show-content', (event, data) => {
  projectorWin.webContents.send('show-content', data);
});