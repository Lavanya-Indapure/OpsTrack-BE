const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
require('./config/db');


app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'OpsTrack backend running'
  });
});

module.exports = app;
