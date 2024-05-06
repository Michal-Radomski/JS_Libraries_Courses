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

const menuTemplate = [
  {
    label: "File",
    submenu: [
      { label: "New ToDo" },
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
