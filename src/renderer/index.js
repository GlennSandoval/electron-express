import React from 'react';
import * as ReactDOM from 'react-dom';
import { ipcRenderer } from 'electron';

const rootEl = document.getElementById('app');

const launchServer = () => {
  ipcRenderer.sendSync('start-server');
};

ReactDOM.render(
  <button onClick={launchServer}>Start Server</button>,
  rootEl
);
