const ping = require("./bindings/ping");
const load_projects = require("./bindings/load_projects");
const open_game_folder = require("./bindings/open_game_folder");
const guess_game = require("./bindings/guess_game");
const save_project = require("./bindings/save_project");
const save_projects = require("./bindings/save_projects");
const load_project = require("./bindings/load_project");

const bind = (mainWindow) => {
    ping.bind(mainWindow);
    load_projects.bind(mainWindow)
    open_game_folder.bind(mainWindow)
    guess_game.bind(mainWindow)
    save_project.bind(mainWindow)
    save_projects.bind(mainWindow)
    load_project.bind(mainWindow)
};

module.exports.bind = bind;