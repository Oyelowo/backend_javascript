// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to connect to mongodb server');
    }
    console.log('connected to Mongodb server');
    const db = client.db('TodoApp');

    // deleteMany
    db
        .collection('Todos')
        .deleteMany({text: 'Something to do'})
        .then(docs => console.log(docs));

    // deleteOne
    db
        .collection('Todos')
        .deleteOne({text: 'Read the book'})
        .then(docs => console.log(docs));

    // findOneDelete client.close();
})