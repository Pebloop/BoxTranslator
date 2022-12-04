const { ipcMain, app, dialog } = require("electron");
const path = require("path");
const fs = require("fs");


const bind = (mainWindow) => {
    ipcMain.on("open_game_folder", async (event, args) => {
        console.log("open game folder received !");

        var path = await dialog.showOpenDialog({
            properties: ['openDirectory']
        });


        if (mainWindow !== undefined && mainWindow.webContents !== undefined)
        mainWindow.webContents.send("open_game_folder", path);
    });
}

module.exports.bind = bind;