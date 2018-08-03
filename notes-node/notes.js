console.log('starting notes.js');
const fs = require('fs');

// console.log(module);

const fetchNotes = () => {
    // use try incase of the first time when the json file has not been created
    // this would prevent error.
    let notes;
    try {
        let noteString = fs.readFileSync('notes-data.json');
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

const getNode = (title) => {
    let notes = fetchNotes();

    let filteredNotes = notes.filter(note => note.title === title);
    // Break on this line and use repl to output note
    // debugger;
    // use the read command with --title
    console.log(filteredNotes);
    let noteFoundMessage = filteredNotes.length > 0 ? 'The note was found' : 'Note not found';
    console.log(noteFoundMessage);
    return filteredNotes;
};

const removeNode = (title) => {

    let notes = fetchNotes();
    let noteLog = "Note not found";
    if (notes.find(note => note.title === title)) {
        filteredNotes = notes.filter(note => note.title !== title);
        saveNotes(filteredNotes);
        noteLog = "Note was removed";
    };
    console.log(noteLog);
};

// const multiplyAll = (...args) => {
//     let result = args.reduce((acc, val) => acc * val);
//     return result;
// };

module.exports = {
    addNote,
    getAll,
    getNode,
    removeNode
};