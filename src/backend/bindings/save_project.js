const { ipcMain, app } = require("electron");
const path = require("path");
const fs = require("fs");

const bind = (mainWindow) => {
    ipcMain.on("save_project", (event, args) => {
        console.log("load_projects received !");
        let success = true;
        const appDataPath = app.getPath("appData");
        const projectsPath = path.join(appDataPath, "BoxTranslator");
        const projectsFolderPath = path.join(projectsPath, "projects");


        if (!fs.existsSync(projectsPath)){
            fs.mkdirSync(projectsPath);
        }

        if (!fs.existsSync(projectsFolderPath)){
            fs.mkdirSync(projectsFolderPath);
        }

        fs.writeFileSync(path.join(projectsFolderPath, args.meta.uid + ".json"), JSON.stringify(args));

        if (mainWindow !== undefined && mainWindow.webContents !== undefined) {
            mainWindow.webContents.send("save_project", success);
        }
    });
}

module.exports.bind = bind;