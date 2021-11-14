const request = require('supertest')

const app = require('../app/server.js')


describe("/GET /allTrabajadores",async (done) => {
    await it('Responde con un json la lista de los usuarios', done => {
        request(app)
        .get('/allTrabajadores')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
        .end((err) => {
            if (err) return done(err);
            done();
        }).catch(done);
    })
})