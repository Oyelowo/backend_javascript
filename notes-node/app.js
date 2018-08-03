const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// command = process.argv[2];
// console.log('command:', command);

argv = yargs.argv;
// console.log('yargs', argv)

const command = argv._[0];

switch (command) {
    case 'add':
        notes.addNote(argv.title, argv.body);
        break;
    case 'list':
        let allNotes = notes.getAll();
        console.log(`There are ${allNotes.length} note(s)`);
        allNotes.forEach((note) => {
            console.log(`Title: ${note.title}\n Body: ${note.body}`);
        })
        break;
    case 'read':
        notes.getNode(argv.title);
        break;
    case 'remove':
        notes.removeNode(argv.title);
        break;
    default:
        console.log('command not recognised');
}