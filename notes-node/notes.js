console.log('starting notes.js');

// console.log(module);

module.exports.addNote = () => {
    console.log("let's add something");
    return 'some notes';
}

module.exports.multiplyAll = (...args) => {
    let result = args.reduce((acc, val) => acc * val);
    return result;
}