import React from 'react';
import * as ReactDOM from 'react-dom';
import { ipcRenderer } from 'electron';

const rootEl = document.getElementById('app');

const launchServer = () => {
  ipcRenderer.send('start-server');
};

const stopServer = () => {
  ipcRenderer.send('stop-server');
};

ipcRenderer.on('start-server-reply', (evt, msg) => console.log(msg));
ipcRenderer.on('stop-server-reply', (evt, msg) => console.log(msg));

ReactDOM.render(
  <>
    <button onClick={launchServer}>Start Server</button>
    <br /><br />
    <button onClick={stopServer}>Stop Server</button>
  </>,
  rootEl
);
