const expect = require('expect');
const utils = require('./utils')

it('should add two numbers', () => {
    let res = utils.add(24, 22);
    expect(res).toBe(46).toBeA('number');
    // if (res !== 46) {
    //     throw new Error(`Expected 44 but got ${res}`);
    // }
});

it('should square a number', () => {
    let res = utils.square(5);
    if (res !== 25) {
        throw new Error(`Expected 25 but got ${res}`);
    }
})