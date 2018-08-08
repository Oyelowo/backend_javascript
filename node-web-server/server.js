const express = require('express');

let app = express();

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.send({
        name: 'Oyelowo',
        likes: ['Coding', 'Traveling']
    })
});

app.get('/about', (req, res) => {
    res.send('About Oyelowo');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'unable to fulfill the request'
    })
});

app.listen(3000);