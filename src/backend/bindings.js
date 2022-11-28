const ping = require("./bindings/ping");

const bind = (mainWindow) => {
    ping.bind(mainWindow);
};

module.exports.bind = bind;