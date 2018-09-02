let mongoose = require('mongoose');

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
    },
    _creator:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

// let newTodo = new Todo({
//     text: '       Edit this video           '
// });

// let anotherTodo = new Todo({
//     text: 'Read Blog',
//     completed: true,
//     completedAt: 123
// })

// newTodo.save().then((doc) => {
//     console.log('saved todo', JSON.stringify(doc, null, 2));
// }, (e) => {
//     console.log('unable to save todo')
// });

// anotherTodo.save().then((doc) => {
//     console.log('saved todo', doc);
// }, (e) => {
//     console.log('unable to save todo')
// });


module.exports={Todo};