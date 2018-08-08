const express = require('express');

let app = express();

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.send({
        name: 'Oyelowo',
        likes: ['Coding', 'Traveling']
    })
});

app.listen(3000);