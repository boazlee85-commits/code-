const { contextBridge } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
  'api', {
    send: (channel, data) => {
      // whitelist channels
      let validChannels = ['toMain'];
      if (validChannels.includes(channel)) {
        // ipcRenderer.send(channel, data);
      }
    },
    receive: (channel, func) => {
      // whitelist channels
      let validChannels = ['fromMain'];
      if (validChannels.includes(channel)) {
        // ipcRenderer.on(channel, (event, ...args) => func(...args));
      }
    }
  }
);
