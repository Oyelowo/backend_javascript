const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo Aoo v1.0'
    });
});


class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};

// GET /users
//give users a name prop and age prop
app.get('/users', (req, res) => {
    let user1 = new User('Oyelowo', 24);
    let user2 = new User('Maria', 22);
    let user3 = new User('Samuel', 25);
    res.send([user1, user2, user3]);
});

app.listen(3000);

module.exports.app = app;