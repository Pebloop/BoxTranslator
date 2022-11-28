const { ipcMain } = require("electron");

const bind = (mainWindow) => {
    ipcMain.on("toMain", (event, args) => {
        console.log("ping received !");
        if (mainWindow !== undefined && mainWindow.webContents !== undefined)
            mainWindow.webContents.send("fromMain", "pong !");
    });
}

module.exports.bind = bind;