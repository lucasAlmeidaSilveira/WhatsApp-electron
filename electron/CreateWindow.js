const { BrowserWindow } = require('electron');

function createWindow() {
  const userAgent =
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36';
    

  const win = new BrowserWindow({
    width: 1100,
    height: 700,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    },
  });

  if (process.platform === 'linux') {
    win.icon = __dirname + '/assets/Tray.png'
  }

  win.loadURL('https://web.whatsapp.com', { userAgent });

  // blur da janela
  // win.on('blur', win.hide);

  return win;
}

module.exports = createWindow();
