const { ipcMain, app } = require("electron");
const path = require("path");
const fs = require("fs");

const bind = (mainWindow) => {
    ipcMain.on("save_projects", (event, args) => {
        console.log("save_projects received !");
        const appDataPath = app.getPath("appData");
        const projectsPath = path.join(appDataPath, "BoxTranslator");
        const metaProjectsPath = path.join(projectsPath, "meta_projects.json");

        if (!fs.existsSync(projectsPath)){
            fs.mkdirSync(projectsPath);
        }

        fs.writeFileSync(metaProjectsPath, "{\"projects\": " + JSON.stringify(args) + "}");

        if (mainWindow !== undefined && mainWindow.webContents !== undefined)
            mainWindow.webContents.send("save_projects", true);
    });
}

module.exports.bind = bind;