const electron = require("electron");
const { Tray, app, Menu } = electron;

class TimerTray extends Tray {
  constructor(iconPath, mainWindow) {
    super(iconPath);

    this.setToolTip("Timer App");
    this.mainWindow = mainWindow;
    this.on("click", this.onClick.bind(this));
    this.on("right-click", this.onRightClick.bind(this)); //* Doesn't work on Linux
  }

  onClick(_event, bounds) {
    // console.log(bounds);
    // const { x, y } = bounds;
    // console.log({ x, y, height, width });

    const { x, y } = process.platform === "linux" ? electron.screen.getCursorScreenPoint() : bounds;
    const { height, width } = this.mainWindow.getBounds();

    if (this.mainWindow.isVisible()) {
      this.mainWindow.hide();
    } else {
      const yPosition = process.platform === "darwin" ? y : process.platform === "linux" ? 0 : y - height;
      this.mainWindow.setBounds({
        x: x - width / 2,
        y: yPosition,
        height: height,
        width: width,
      });
      this.mainWindow.show();
    }
  }

  onRightClick() {
    const menuConfig = Menu.buildFromTemplate([
      {
        label: "Quit",
        click: () => app.quit(),
      },
    ]);
    this.popUpContextMenu(menuConfig);
  }
}

module.exports = TimerTray;
