const {
    ObjectID
} = require('mongodb');

const {
    mongoose
} = require('../server/db/mongoose');

const {
    Todo
} = require('../server/models/todos');

const {
    User
} = require('../server/models/user');


// Todo.remove({}).then((result)=> console.log(result));

// similar
// Todo.findOneAndRemove({})
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5b7a8bd52a59cdb6b62caabf'}).then(todo=>console.log(todo))

Todo.findByIdAndRemove('5b7a8bd52a59cdb6b62caabf').then((todo)=>{
console.log(todo);
});