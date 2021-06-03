const { app } = require('electron')
const ControlWindow = require('./ControlWindow.js')

function App() {
  const win = require('./CreateWindow.js')
  const tray = require('./Tray.js')

  const { toggle } = ControlWindow(win, tray)

  tray.on('click', toggle)
}

app.whenReady().then(App)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
