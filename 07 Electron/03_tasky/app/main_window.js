const electron = require("electron");
const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow {
  constructor(url) {
    super({
      //* Only here - don't do in this way!
      height: 500,
      width: 300,
      frame: false,
      resizable: false,
      show: false,
      skipTaskbar: true,
      webPreferences: { backgroundThrottling: false },
    });

    this.loadURL(url);
    this.on("blur", this.onBlur.bind(this));
  }

  onBlur() {
    this.hide();
  }
}

module.exports = MainWindow;
