const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(notes.addNote());
console.log(notes.multiplyAll(1, 2, 3, 5, 11, 34, 3));

duplicateArray = ['tt',2, 5, 5, 4, "Oyelowo", "oyelowo", "Oyelowo", 345, 2, 8, 5];
console.log(_.uniq(duplicateArray));

console.log(_.isString(duplicateArray));
console.log(_.isString("duplicateArray"));
// username = os.userInfo().username;
// console.log(username);

// console.log('starting app');
// fs.appendFile('sayHi.txt', `Hello${username}!`, (err) => {
//     err
//         ?
//         console.log('something went wrong') :
//         console.log('App working');
// });