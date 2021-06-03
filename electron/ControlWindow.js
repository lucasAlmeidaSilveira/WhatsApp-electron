function ControlWindow(win, tray) {
  function toggle() {
    if(win.isVisible()) {
      win.hide()
    } else {
      show()
    }
  }

  function show() {
    // pegar o posicionamento da win / tray
    const { x, y } = getPosition()
    // atualizar o posicionamento da win
    win.setPosition(x, y, false)
    // mostrar a win
    win.show()
    win.focus()
  }

  function getPosition() {
    let winBounds = win.getBounds()
    let trayBounds = tray.getBounds()

    if(trayBounds.x == 0){
      x = Math.round((winBounds.width * 4))
      y = Math.round(3)
    } else{
      x = Math.round(trayBounds.x + (trayBounds.width / 2) - (winBounds.width / 2))
      y = Math.round(trayBounds.y + trayBounds.height + 3)
    }

    return {x, y}
  }

  return {
    toggle
  }
}

module.exports = ControlWindow