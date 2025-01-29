const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("dist/index.htm");
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
});
