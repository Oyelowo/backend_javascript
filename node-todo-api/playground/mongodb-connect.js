const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to connect to mongodb server');
    }
    console.log('connected to Mongodb server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to leave',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, null, 2));
    // });

    //insert one doc into users (name, age, location)

    db.collection('Users').insertOne({
        name: 'Oyelowo Oyedayo',
        age: 24,
        location: 'Helsinki, Finland'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }
        console.log(result.ops[0]._id.getTimestamp());
    });

    client.close();
})