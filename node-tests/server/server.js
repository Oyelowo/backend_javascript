const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(404).send('Hello World!');
});

app.listen(3000);

module.exports.app = app;