const request = require('supertest');
const express = require('express');


let app = require('./server').app;

it('should return Hello World! response', (done) => {
    request(app)
        .get('/')
        .expect(200)
        .expect('Hello World!')
        .end(done);
})