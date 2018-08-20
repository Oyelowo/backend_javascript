const {
    mongoose
} = require('./../server/db/mongoose');
const {
    Todo
} = require('./../server/models/todos');

let id = '5b7a60fc97fbad0b98836d44';

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if(!todo){
        return console.log('id not found')
    }
    console.log('Todo By id', todo);
})