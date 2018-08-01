console.log('starting notes.js');

// console.log(module);

const addNote = (title, body) => {
    console.log('adding note', title, body);
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