const mongoose = require('mongoose');
const validator = require('validator');

// {
//     email: 'oyelowooyedayo@gmail.com',
//     password: 'jdfhdfkjrlksnrkasf',
//     tokens: [{
//         access: 'auth',
//         token: 'jknlzfhjkljrjklhskjgshdjfoik'
//     }]
// }
let User = mongoose.model('User', {
    email: {
        required: true,
        trim: true,
        type: String,
        minLength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} email is not valid'
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

// let newUser = new User({
//     email: '    oyelowooyedayo@gmail.com     '
// });

// newUser.save().then(res => console.log('response', res), err => console.log(err));


module.exports = {
    User
};