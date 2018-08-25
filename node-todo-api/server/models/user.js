const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
consr _= require('lodash');

// {
//     email: 'oyelowooyedayo@gmail.com',
//     password: 'jdfhdfkjrlksnrkasf',
//     tokens: [{
//         access: 'auth',
//         token: 'jknlzfhjkljrjklhskjgshdjfoik'
//     }]
// }

let UserSchema = new mongoose.Schema({
    email: {
        required: true,
        trim: true,
        type: String,
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} email is not valid'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
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

UserSchema.methods.toJSON = function () {
    let user=this;
    let userObject=user.toObject();
    return _.pick(userObject, ['_id','email']);
}

UserSchema.methods.generateAuthToken = function () {
    let user = this;
    let access = 'auth';
    let token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

    user.tokens = user.tokens.concat([{access, token}]);

   return user.save().then(()=>{
        return token;
    });
}

let User = mongoose.model('User', UserSchema);

// let newUser = new User({
//     email: '    oyelowooyedayo@gmail.com     '
// });

// newUser.save().then(res => console.log('response', res), err => console.log(err));


module.exports = {
    User
};