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

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5b743f512ed1044c846ba0f7")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(doc => console.log(doc))


    db.collection('Users').findOneAndUpdate({
        _id: ObjectID("5b7441bf0a354a3ddcccb158")
    }, {
        $set: {
            name: 'Oyelowo'
        },

        $inc: {
            age: 200
        }
    }, {
        returnOriginal: false
    }).then(doc => console.log(doc), err => console.log(err));


    // client.close();

})