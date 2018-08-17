let mongoose = require('mongoose');
// to make it use inbuilt promise as opposed to third party Promise
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

// save new something
let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

let newTodo = new Todo({
    text: 'true'
});

let anotherTodo = new Todo({
    // text: 'Read Blog',
    // completed: true,
    // completedAt: 123
})

newTodo.save().then((doc) => {
    console.log('saved todo', JSON.stringify(doc, null, 2));
}, (e) => {
    console.log('unable to save todo')
});

anotherTodo.save().then((doc) => {
    console.log('saved todo', doc);
}, (e) => {
    console.log('unable to save todo')
});