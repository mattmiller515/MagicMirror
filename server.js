const express = require('express');
const path = require('path');
const open = require('open');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}`));

open(`http://localhost:${port}`, { app: ['chrome', '--kiosk'] });