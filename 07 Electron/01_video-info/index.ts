import electron from "electron";
import ffmpeg from "fluent-ffmpeg";
// console.log("electron:", electron);

const { app, BrowserWindow, ipcMain } = electron;
// console.log("app:", app);

app.on("ready", () => {
  // console.log("App is ready");
  const mainWindow: electron.BrowserWindow = new BrowserWindow({
    webPreferences: { nodeIntegration: true, contextIsolation: false },
  });
  // console.log("mainWindow:", mainWindow);
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  ipcMain.on("video:submit", (_event: Electron.IpcMainEvent, path: string) => {
    ffmpeg.ffprobe(path, (_error: Error, metadata: ffmpeg.FfprobeData) => {
      // console.log("metadata:", metadata);
      mainWindow.webContents.send("video:metadata", metadata.format.duration);
    });
  });
});
