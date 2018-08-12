const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.send.status(404).('Hello World!');
});

app.listen(3000);

module.exports.app = app;