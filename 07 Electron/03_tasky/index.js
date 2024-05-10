const electron = require("electron");
const path = require("path");

const TimerTray = require("./app/timer_tray");

const { app, BrowserWindow } = electron;

let mainWindow;
let tray;

app.on("ready", () => {
  // app.dock.hide();

  mainWindow = new BrowserWindow({
    height: 500,
    width: 300,
    frame: false,
    resizable: false,
    show: false,
    skipTaskbar: true,
  });
  mainWindow.loadURL(`file://${__dirname}/src/index.html`);
  mainWindow.on("blur", () => {
    mainWindow.hide();
  });

  process.platform === "win32" || "linux" ? mainWindow.setSkipTaskbar(true) : app.dock.hide();

  // const iconName = process.platform === "win32" ? "windows-icon.png" : "linux" ? "windows-icon.png" : "iconTemplate.png";
  const iconName = process.platform === "win32" || "linux" ? "windows-icon.png" : "iconTemplate.png";
  const iconPath = path.join(__dirname, `./src/assets/${iconName}`);
  tray = new TimerTray(iconPath, mainWindow);
});
