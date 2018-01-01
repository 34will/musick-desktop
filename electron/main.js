const ElectronWindow = require("./electron-window");
const url = require("url");
const path = require("path");

const argumentRegex = /--(.*)=(.*)/;
const arguments = process.argv.slice(2);
let mode = "debug";
let webtools = true;

function ProcessArgument(argument) {
	let matches = argument.match(argumentRegex);
	if (matches && matches.length == 3) {
		let option = matches[2];
		switch (matches[1]) {
			case "mode":
				if (option == "release")
					mode = option;
				break;
			case "webtools":
				webtools = option === "true";
				break;
		}
	}
}

process.argv.slice(2).forEach(ProcessArgument);

if (mode == "debug") {
	ElectronWindow.url = url.format({
		pathname: "index.html",
		hostname: "localhost",
		protocol: "http:",
		port: 4200
	});
}
else {
	ElectronWindow.url = url.format({
		pathname: path.join(__dirname, "..", "dist", "index.html"),
		protocol: "file:",
		slashes: true
	});
}

ElectronWindow.Start(webtools);
