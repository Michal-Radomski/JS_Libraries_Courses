import electron from "electron";

const { app, BrowserWindow, Menu } = electron;

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    webPreferences: { nodeIntegration: true, contextIsolation: false },
  });

  mainWindow.loadURL(`file://${__dirname}/main.html`);

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

const createAddWindow = (): void => {
  let addWindow: electron.BrowserWindow | null = new BrowserWindow({
    webPreferences: { nodeIntegration: true, contextIsolation: false },
    width: 300,
    height: 200,
    title: "Add New Todo",
  });
  // addWindow.loadURL(`file://${__dirname}/add.html`);
  // addWindow.on("closed", () => (addWindow = null));
};

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
];

if (process.platform === "darwin") {
  menuTemplate.unshift({} as any);
}

// console.log("process.platform:", process.platform);
