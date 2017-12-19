const ElectronWindow = require("./electron-window");
const url = require("url");

ElectronWindow.url = url.format({
    pathname: "index.html",
    hostname: "localhost",
    protocol: "http:",
    port: 4200
});

ElectronWindow.Start();
