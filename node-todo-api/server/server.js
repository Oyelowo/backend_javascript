let {
    mongoose
} = require('./db/mongoose');
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
    text: '       Edit this video           '
});

let anotherTodo = new Todo({
    text: 'Read Blog',
    completed: true,
    completedAt: 123
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


let User = mongoose.model('User', {
    email: {
        required: true,
        trim: true,
        type: String,
        minLength: 1
    }
});

let newUser = new User({
    email: '    oyelowooyedayo@gmail.com     '
});

newUser.save().then(res => console.log('response', res), err => console.log(err));