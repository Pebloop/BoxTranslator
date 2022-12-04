const { ipcMain, app, dialog } = require("electron");
const path = require('path');
const fs = require("fs");

const GameType = [
    ["The Jackbox Party Pack.exe", "The Jackbox Party Pack 1"],
    ["The Jackbox Party Pack 2.exe", "The Jackbox Party Pack 2"],
    ["The Jackbox Party Pack 3.exe", "The Jackbox Party Pack 3"],
    ["The Jackbox Party Pack 4.exe", "The Jackbox Party Pack 4"],
    ["The Jackbox Party Pack 5.exe", "The Jackbox Party Pack 5"],
    ["The Jackbox Party Pack 6.exe", "The Jackbox Party Pack 6"],
    ["The Jackbox Party Pack 7.exe", "The Jackbox Party Pack 7"],
    ["The Jackbox Party Pack 8.exe", "The Jackbox Party Pack 8"],
    ["The Jackbox Party Pack 9.exe", "The Jackbox Party Pack 9"],
]

const bind = (mainWindow) => {
    ipcMain.on("guess_game", async (event, data) => {
        console.log("guess game received !");
        if (data === undefined || data.length === 0) {
            return;
        }

        let game = null;
        for (let i = 0; i < GameType.length; i++) {
            const gamePath = path.join(data[0], GameType[i][0]);
            if (fs.existsSync(gamePath)) {
                game = GameType[i][1];
                break;
            }
        }
        console.log(game);
        if (mainWindow !== undefined && mainWindow.webContents !== undefined)
            mainWindow.webContents.send("guess_game", game);
    });
}

module.exports.bind = bind;