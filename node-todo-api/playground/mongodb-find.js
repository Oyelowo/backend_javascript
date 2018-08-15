// const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');


let obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to connect to mongodb server');
    }
    console.log('connected to Mongodb server');
    const db = client.db('TodoApp');

    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos\n', JSON.stringify(docs, null, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });


    client.close();
})