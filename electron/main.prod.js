const ElectronWindow = require("./electron-window");
const url = require("url");
const path = require("path");

ElectronWindow.url = url.format({
	pathname: path.join(__dirname, "..", "src", "index.html"),
	protocol: "file:",
	slashes: true
});

ElectronWindow.Start();
