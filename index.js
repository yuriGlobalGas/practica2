const express = require('express');
const os = require('os');

const app = express();

app.get('/', (req, res) => {
  const podName = os.hostname();
  res.send(`Hello World from 3`);
});

module.exports = app;
