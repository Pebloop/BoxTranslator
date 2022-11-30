const { ipcMain } = require("electron");
const fs = require("fs");

const bind = (mainWindow) => {
    ipcMain.on("toMain", (event, args) => {
        console.log("ping received !");
        if (mainWindow !== undefined && mainWindow.webContents !== undefined)
            mainWindow.webContents.send("fromMain", "pong !");
        fs.writeFile("test.txt", "test", (err) => {
            if (err) {
                console.log(err);
            }
        });
    });
}

module.exports.bind = bind;