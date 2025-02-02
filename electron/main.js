const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");

class MainWindow extends BrowserWindow {
  constructor() {
    super({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, "preload.js"),
      },
    });

    this.loadFile("dist/index.htm");
  }
}

var win = null;

const createWindow = () => {
  win = new MainWindow();
};

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

/** @see electron/electron#21972 */
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  ipcMain.handle("hello", async () => {
    console.log("ipcMain.handle('hello')");
    return "world";
  });

  ipcMain.handle("getPosition", async () => {
    console.log(win.getPosition());
    return "pong";
  });
});
