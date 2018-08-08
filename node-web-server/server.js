const express = require('express');

let app = express();

app.get('/', (req, res) => {
    req.setEncoding('Hello Express!');
});

app.listen(3000);