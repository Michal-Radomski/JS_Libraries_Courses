import electron from "electron";

const { contextBridge, ipcRenderer } = electron;

contextBridge.exposeInMainWorld("electron", {
  submitVideo: (filePath: string) => {
    ipcRenderer.send("video:submit", filePath);
  },
  receiveVideoMetadata: (onMetadataReceived: (arg0: number) => void): void => {
    ipcRenderer.on("video:metadata", (_event, duration: number) => {
      onMetadataReceived(duration);
    });
  },
});
