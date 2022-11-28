const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const bind = require("./bindings.js");

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    icon: path.join(__dirname, "../../public/favicon.ico"),
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false, // is default value after Electron v5
      contextIsolation: true, // protect against prototype pollution
      enableRemoteModule: false, // turn off remote
      preload: path.join(__dirname, "preload.js") // use a preload script,
      
    }
  });
  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadFile(path.join(__dirname, "../../public/index.html"));
  mainWindow.webContents.openDevTools();

  bind.bind(mainWindow);

});