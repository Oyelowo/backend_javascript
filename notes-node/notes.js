console.log('starting notes.js');
const fs = require('fs');

// console.log(module);

const fetchNotes = () => {
    // use try incase of the first time when the json file has not been created
    // this would prevent error.
    try {
        noteString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(noteString);
    } catch (e) {
        notes = [];
    }
    return notes;
}

const saveNotes = (notes) => fs.writeFileSync("notes-data.json", JSON.stringify(notes));

const addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };
    fetchNotes();

    if (!notes.find(note => note.title === title)) {
        notes.push(note);
        saveNotes(notes);
        console.log("Note created!");
    } else {
        console.log("NOTE ALREADY EXIST");
    }
}

const getAll = () => console.log("listing all nodes");

const getNode = (title) => console.log('getting node', title);

const removeNode = (title) => console.log('removing node', title);
// const multiplyAll = (...args) => {
//     let result = args.reduce((acc, val) => acc * val);
//     return result;
// }

module.exports = {
    addNote,
    getAll,
    getNode,
    removeNode
}