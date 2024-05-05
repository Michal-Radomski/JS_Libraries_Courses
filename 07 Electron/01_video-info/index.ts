import electron from "electron";
// console.log("electron:", electron);

const { app, BrowserWindow } = electron;
// console.log("app:", app);

app.on("ready", () => {
  // console.log("App is ready");
  const mainWindow = new BrowserWindow({
    webPreferences: { nodeIntegration: true, contextIsolation: false },
  });
  // console.log("mainWindow:", mainWindow);
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});
