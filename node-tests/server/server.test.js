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
})