const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

command = process.argv[2];
console.log('command:', command);

argv = yargs.argv;
console.log('yargs', argv)

console.log(process.argv);

switch (command) {
    case 'add':
        console.log('adding new notes');
        notes.addNote(argv.title, argv.body);
        break;
    case 'list':
        console.log('listing notes');
        break;
    case 'read':
        console.log('reading notes');
        break;
    case 'remove':
        console.log('Removed notes');
        break;
    default:
        console.log('command not recognised');
}