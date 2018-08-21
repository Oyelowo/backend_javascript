const hello = () => 'hello';

const reverseString = (str) => str
    .split('')
    .reverse()
    .join('');

const addAll = (...args) => {
    if (args.some(el => typeof el !== 'number')) {
        return null;
    }
    return args.reduce((acc, val) => acc + val, 0);
};

const fetchData = async(url) => {
    let data = await fetch(url)
    return data.json()
}

const fizzbuzz = () => {
    let i = 1;
    while (i <= 100) {
        let expletive = '';
        if (i % 3 === 0) 
            expletive += 'Fizz';
        if (i % 5 === 0) 
            expletive += 'Buzz';
        console.log(expletive || i);
        i++;
    }
}
// fizzbuzz();

// const fizzbuzz = () => {     let j = 1;     while (j <= 100) {         let
// num = null;         if (j % 3 === 0 && j % 5 === 0) {             num =
// 'FizzBuzz';         } else if (j % 3 === 0) {             num = 'fizz';   }
// else if (j % 5 === 0) {             num = 'Buzz';         } else {      num =
// j;         }         console.log(num);         j++;     } }



// export {hello, reverseString}
module.exports = {
    hello,
    reverseString,
    addAll,
    fetchData,
    fizzbuzz
};
// module.exports = reverseString;