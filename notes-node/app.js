const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

command = process.argv[2];
console.log('command:', command);

switch (command) {
    case 'add':
        console.log('adding new notes');
        break;
    case 'list':
        console.log('listing notes');
        break;
    default:
        console.log('command not recognised');
}