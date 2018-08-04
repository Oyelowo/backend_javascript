const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// command = process.argv[2];
// console.log('command:', command);

let titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

let bodyOptions = {
    describe: 'This is the body of the note',
    demand: true,
    alias: 'b'
}

argv = yargs
    .command('add', 'Adds a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Reads a note', {
        title: titleOptions
    })
    .command('remove', 'Removes note', {
        title: titleOptions
    })
    .help()
    .argv;
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