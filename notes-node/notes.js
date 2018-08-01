console.log('starting notes.js');

// console.log(module);

module.exports.addNote = (title, body) => {
    console.log('adding note', title, body);
}

module.exports.multiplyAll = (...args) => {
    let result = args.reduce((acc, val) => acc * val);
    return result;
}

