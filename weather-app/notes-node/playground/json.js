// let obj = {
//     name: 'Oyelowo'
// }

// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);


// let personString = '{"name": "Oyelowo","Age": "24"}';

// let personObj = JSON.parse(personString);
// console.log(typeof personObj);
// console.log(personObj);

const fs = require('fs');

let originalNote = {
    title: 'the title',
    body: 'the body'
};

// originalNoteString
let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');

// note
let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);