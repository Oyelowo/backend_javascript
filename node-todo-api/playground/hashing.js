const {
    SHA256
} = require('crypto-js');

let message = 'This is Oyelowo';
let hash = SHA256(message).toString();
console.log('hash', hash);

