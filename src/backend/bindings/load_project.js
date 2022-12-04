const { ipcMain, app } = require("electron");
const path = require("path");
const fs = require("fs");

const bind = (mainWindow) => {
    ipcMain.on("load_project", (event, metaProject) => {
        console.log("load_project received !");
        const appDataPath = app.getPath("appData");
        const projectsPath = path.join(appDataPath, "BoxTranslator");
        const metaProjectsPath = path.join(projectsPath, "meta_projects.json");
        const projectsFolderPath = path.join(projectsPath, "projects");

        if (!fs.existsSync(projectsPath)){
            fs.mkdirSync(projectsPath);
        }

        if (!fs.existsSync(projectsFolderPath)){
            fs.mkdirSync(projectsFolderPath);
        }

        if (!fs.existsSync(metaProjectsPath)){
            return;
        }

        const project = JSON.parse(fs.readFileSync(path.join(projectsFolderPath, metaProject.uid + ".json"), "utf8"));

        if (mainWindow !== undefined && mainWindow.webContents !== undefined)
            mainWindow.webContents.send("load_project", project || undefined);
    });
}

module.exports.bind = bind;