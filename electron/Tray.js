const { Tray } = require("electron");
const { resolve } = require("path");

const iconPath = resolve(__dirname, '../', 'assets', 'Tray.png')

function createTray() {
  const tray = new Tray(iconPath);
  tray.setToolTip('Abrir')

  return tray;
}

module.exports = createTray();
