const express = require('express');
const hbs = require('hbs');

let app = express();

hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('shoutIt', (text) => text.toUpperCase());

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    let now= new Date().toString();
    console.log(`${now}`)
    next()
});

// app.get('/', (req, res) => {     // res.send('<h1>Hello Express!</h1>');
// res.send({         name: 'Oyelowo',         likes: ['Coding', 'Traveling'] })
// });

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Oyelowo\'s Home Page',
        welcomeMessage: 'Welcome to my code cave'
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {pageTitle: 'About Page'})
});

app.get('/bad', (req, res) => {
    res.send({errorMessage: 'unable to fulfill the request'})
});

app.listen(3000, () => {
    console.log('server is up on port 3000');
});