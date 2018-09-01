const {
    SHA256
} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = '123abc'

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log('hash', hash);
    });
});

let hashedPassword = '$2a$10$95dc4QmzRvVILfgGRBY8w.s7S2yLZ2TIDfGgGVoFW5ijdr1iVMz2.';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log('res', res);
});


// let data = {
//     id: 10
// };

// let token = jwt.sign(data, '123abc');
// console.log('token', token);

// let decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);

// let message = 'This is Oyelowo';
// let hash = SHA256(message).toString();
// console.log('hash', hash);


// let data = {
//     id: 4
// };

// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// token.data.id=5;
// token.hash=SHA256(JSON.stringify(token.data)).toString();

// let resultHash= SHA256(JSON.stringify(token.data)+ 'somesecret').toString();

// if(resultHash===token.hash){
//     console.log('data was not changed');
// }else{
//     console.log('data was changed, don\'t trust');
// }