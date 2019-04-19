const superTest = require('supertest');

const request = superTest('http://localhost:6000');
var tempResourceId = null;

describe('GET /resource', () => {
    it('reponds with status 200 and content-type json', (done) => {
        request.get('/resource').expect('Content-Type', /json/).expect(200, done);
    });
});

describe('PUT /resource', () => {
    it('reponds with status 201', (done) => {
        request.put('/resource').expect(201).then(response => {
            tempResourceId = response.body._id;
            console.log(`Resource ${response.body._id} created`);
            done();
        });
    });
});

describe('DELETE /resource', () => {
    it('reponds with status 200', (done) => {
        request.delete(`/resource/${tempResourceId}`).expect(200).then(response => {
            console.log(`Resource ${tempResourceId} removed`);
            done();
        })
    });
});
