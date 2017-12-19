const { app, BrowserWindow } = require("electron");

class ElectronWindow
{
    constructor()
    {
        this.win = null;
        this.url = null;
    }

    CreateWindow()
    {
        // Create the browser window.
        this.win = new BrowserWindow({ width: 800, height: 600 });

        console.log("Loading: " + this.url);

        // and load the index.html of the app.
        this.win.loadURL(this.url);

        // Open the DevTools.
        this.win.webContents.openDevTools();

        // Emitted when the window is closed.
        this.win.on("closed", () =>
        {
            // Dereference the window object, usually you would store windows
            // in an array if your app supports multi windows, this is the time
            // when you should delete the corresponding element.
            this.win = null;
        });
    }

    Start()
    {
        // This method will be called when Electron has finished
        // initialization and is ready to create browser windows.
        // Some APIs can only be used after this event occurs.
        app.on("ready", () => this.CreateWindow());

        // Quit when all windows are closed.
        app.on("window-all-closed", () =>
        {
            // On macOS it is common for applications and their menu bar
            // to stay active until the user quits explicitly with Cmd + Q
            if (process.platform !== "darwin")
                app.quit();
        });

        app.on("activate", () =>
        {
            // On macOS it's common to re-create a window in the app when the
            // dock icon is clicked and there are no other windows open.
            if (this.win === null)
                this.CreateWindow();
        });

        // In this file you can include the rest of your app's specific main process
        // code. You can also put them in separate files and require them here.
    }
}

module.exports = new ElectronWindow();
