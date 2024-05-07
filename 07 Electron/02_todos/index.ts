import electron from "electron";

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow: electron.BrowserWindow, addWindow: electron.BrowserWindow | null;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    webPreferences: { nodeIntegration: true, contextIsolation: false },
  });

  mainWindow.loadURL(`file://${__dirname}/main.html`);
  mainWindow.on("closed", () => app.quit());

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

const createAddWindow = (): void => {
  addWindow = new BrowserWindow({
    webPreferences: { nodeIntegration: true, contextIsolation: false },
    width: 300,
    height: 200,
    title: "Add New Todo",
  });
  addWindow.loadURL(`file://${__dirname}/add.html`);
  addWindow.on("closed", () => (addWindow = null));
};

ipcMain.on("todo:add", (_event: electron.IpcMainEvent, todo: string): void => {
  mainWindow.webContents.send("todo:add", todo);
  addWindow?.close();
});

const menuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "New ToDo",
        click: () => createAddWindow(),
      },
      {
        label: "Quit",
        // accelerator: "Ctrl+Q",
        // accelerator: (() => {
        //   if (process.platform === "darwin") {
        //     return "Command+Q";
        //   } else {
        //     return "Ctrl+Q";
        //   }
        // })(),
        accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl+Q",
        click: () => app.quit(),
      },
    ],
  },
] as (electron.MenuItemConstructorOptions | electron.MenuItem)[];

if (process.platform === "darwin") {
  menuTemplate.unshift({} as any);
}

// console.log("process.platform:", process.platform);

if (process.env.NODE_ENV !== "production") {
  menuTemplate.push({
    label: "View",
    submenu: [
      { role: "reload" },
      {
        label: "Toggle Developer Tools",
        accelerator: process.platform === "darwin" ? "Command+Alt+I" : "Ctrl+Shift+I",
        click(_item: electron.MenuItem, focusedWindow: electron.BrowserWindow | any) {
          // console.log("focusedWindow:", focusedWindow);
          focusedWindow?.toggleDevTools();
        },
      },
    ],
  });
}
