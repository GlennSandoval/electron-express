const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

let server = null;

module.exports = {
  start: () => {
    if(server) {
      return 'Server already running on port 3000';
    }
    server = app.listen(3000);
    return 'Express started on port 3000';
  },
  stop: () => {
    if (server) {
      server.close();
      server = null;
      return 'Express on port 3000 stopped';
    } else {
      return 'Express not started!';
    }
  }
};
