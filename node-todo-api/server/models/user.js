let mongoose = require('mongoose');

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
            validate:{
                validator: (value)=>{

                }, 
                message: '{VALUE} email is not valid'
            }
        }
    });

// let newUser = new User({
//     email: '    oyelowooyedayo@gmail.com     '
// });

// newUser.save().then(res => console.log('response', res), err => console.log(err));


module.exports={User};