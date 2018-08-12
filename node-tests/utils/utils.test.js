const expect = require('expect');
const utils = require('./utils')

it('should add two numbers', () => {
    let res = utils.add(24, 22);
    expect(res).toBe(46).toBeA('number');
    // if (res !== 46) {
    //     throw new Error(`Expected 44 but got ${res}`);
    // }
});

it('should async add two numbers', (done) => {
    utils.asyncAdd(2, 3, (sum) => {
        expect(sum).toBe(5).toBeA('number');
        done();
    })
})

it('should square a number', () => {
    let res = utils.square(5);
    expect(res).toBe(25).toBeA('number');
    // if (res !== 25) {
    //     throw new Error(`Expected 25 but got ${res}`);
    // }
})

it('should async square a number', (done) => {
    utils.asyncSquare(5, (squared) => {
        expect(squared).toBe(25).toBeA('number');
        done();
    })
})

it("should exprect some values", () => {
    // expect(12).toNotBe(11);
    // expect({name:'Oyelowo'}).toEqual({name:'Oyelowo'});
    // expect({name:'Oyelowo'}).toNotEqual({name:'Oyelow'});
    // expect([2,3,5]).toInclude(5);
    // expect([2,3,5]).toExclude(1);
    // expect({
    //     name: 'Oyelowo',
    //     age: 24,
    //     location: 'Finland'
    // }).
    // toInclude({
    //     age: 24
    // });
    // expect({
    //     name: 'Oyelowo',
    //     age: 24,
    //     location: 'Finland'
    // }).
    // toExclude({
    //     age: 25
    // });
});

it('should be an Object', () => {
    let user = {
        age: 24,
        location: 'Finland'
    };
    let res = utils.setName(user, 'Oyelowo Oyedayo');
    expect(res).toBeA('object');
    // expect(res.lastName).toNotBeA('undefined');
});

it('should set firstName, lastName', () => {
    let user = {
        age: 24,
        location: 'Finland'
    };

    let res = utils.setName(user, 'Oyelowo Oyedayo');
    expect(res).toInclude({
        lastName: 'Oyedayo',
        firstName: 'Oyelowo'
    });

});