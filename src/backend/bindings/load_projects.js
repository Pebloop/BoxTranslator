const { ipcMain, app } = require("electron");
const path = require("path");
const fs = require("fs");

const bind = (mainWindow) => {
    ipcMain.on("load_projects", (event, args) => {
        console.log("load_projects received !");
        const appDataPath = app.getPath("appData");
        const projectsPath = path.join(appDataPath, "BoxTranslator");
        const metaProjectsPath = path.join(projectsPath, "meta_projects.json");

        if (!fs.existsSync(projectsPath)){
            fs.mkdirSync(projectsPath);
        }

        if (!fs.existsSync(metaProjectsPath)){
            fs.writeFileSync(metaProjectsPath, "{\"projects\":[]}");
        }

        const metaProjects = JSON.parse(fs.readFileSync(metaProjectsPath, "utf8"));

        if (mainWindow !== undefined && mainWindow.webContents !== undefined)
            mainWindow.webContents.send("load_projects", metaProjects.projects || []);
    });
}

module.exports.bind = bind;