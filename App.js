const http = require('http');
const express = require('express');
const app = express();
const path = require('path');

// sendFile will go here
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './view/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running at `+ port);
});