const {
    ObjectID
} = require('mongodb');

const {
    mongoose
} = require('./../server/db/mongoose');

const {
    Todo
} = require('./../server/models/todos');

const {
    User
} = require('././../server/models/user');



// let id = '5b7a60fc97fbad0b98836d4';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }


// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// }).catch((e) => console.log(e));

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('id not found')
//     }
//     console.log('Todo By id', todo);
// })


let userID = '5b771919b401ac2af421c1fb';

if(!ObjectID.isValid(userID)){
    console.log('ID not found');
}

// User.find({
//     _id: userID
// }).then((users) => {
//     console.log('Users', users)
// });

// User.findOne({
//     _id: userID
// }).then((user) => {
//     console.log('User', user)
// });

User.findById(userID).then((user) => {
    if (!user) {
        return console.log('unable to find user')
    }
    console.log('User by id', JSON.stringify(user, null, 2))
}).catch((e) => console.log(e))