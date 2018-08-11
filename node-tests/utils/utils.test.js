const utils = require('./utils')

it('should add two numbers', () => {
    let res = utils.add(24, 22);
    if (res !== 46) {
        throw new Error(`Expected 44 but got ${res}`);
    }
});