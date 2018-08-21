const hello = () => 'hello';

const reverseString = (str) => str.split('').reverse().join('');

const addAll = (...args) => {
    if (args.some(el => typeof el !== 'number')) {
        return null;
    }
    return args.reduce((acc, val) => acc + val, 0);
};

// export {hello, reverseString}
module.exports = {
    hello,
    reverseString,
    addAll
};
// module.exports = reverseString;