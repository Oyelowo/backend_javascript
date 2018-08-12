const request = require('supertest');
const expect = require('expect');
const express = require('express');


let app = require('./server').app;

it('should return Hello World! response', (done) => {
    request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
            expect(res.body).toInclude({
                error: 'Page not found'
            });
        })
        // .expect({ 
        //     error: 'Page not found'
        // })
        // .expect('Hello World!')
        .end(done);
});

//Make a new test
//assert 200
// assert that I exist in users' array
it('gets arrays of users and returns my object', (done)=>{
request(app)
.get('/users')
.expect(200)
.expect((res)=>{
    expect(res.body).toBeA('array');
    expect(res.body).toInclude({name: 'Oyelowo', age: 24});
})
.end(done);
})