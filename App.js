const http = require('http');
const express = require('express');
const app = express();
const path = require('path');

// sendFile will go here
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './view/index.html'));
});

app.listen('3000', '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:3000/`);
});