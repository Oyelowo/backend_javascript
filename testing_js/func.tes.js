// const {
//     hello,
//     reverseString,
//     addAll,
//     fetchData,
//     fizzbuzz
// } = require('./func');


// // console.log(hello());
// // console.log(reverseString('netlight'));

// describe('Hello', () => {
//     it('should print out hello', () => {
//         expect(hello()).toBe('hello');
//     })

//     it('should reverse the string', () => {
//         expect(reverseString('netlight')).toBe('thgilten');
//     })
// })


// describe('Add', () => {
//     it('should add all elements of an array', () => {
//         expect(addAll(1, 2, 3, 4, 5, 5)).toBe(20);
//         expect(addAll(1, 2, 3, 4, 5, '5')).toBeNull();
//         expect(addAll(1, 2, 3, [], 5, 5)).toBeNull();
//         expect(addAll(1, 2, 3, 4, {}, 5)).toBeNull();
//         expect(addAll(1, 2, 3, 4, 5, 5)).toBeTruthy();
//         expect(addAll(1, 2, 3, 4, 5, 5)).not.toBeFalsy();
//         expect(addAll(1, 2, 3, 4, 5, 5)).not.toBeNull();
//         expect(typeof addAll(1, 2, 3, 4, 5, 5)).toBe('number');
//     });
// });


// describe('GET /https://jsonplaceholder.typicode.com/posts', () => {
//     it('should GET posts', (done) => {
//         expect(fetchData('https://jsonplaceholder.typicode.com/posts')).not.toBeNull();
//         expect(typeof fetchData('https://jsonplaceholder.typicode.com/posts')).toBe('object');
//         done();
//     });

// })

// describe('FIZZBUZZ', () => {
//     it('should be called 100 times', () => {
//         const fizzbuzz = jest.fn();
//         fizzbuzz();
//         expect(fizzbuzz).toHaveBeenCalled();
//     });
// });

