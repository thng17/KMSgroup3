import chai from 'chai'
import chaiHttp from 'chai-http'
import axios from "axios";

chai.use(chaiHttp)

/*
describe('Base Route test', () => {
    it('text "Hello World!"', () => {
        return axios.get('http://localhost:3000/').then(res => {
            chai.expect(res.data).to.equal('Hello World!')
        })
    })
})
 */

describe('GET all todos', () => {
    it('test get all todos', () => {
        return axios.get('http://localhost:3000/all').then(res => {
            chai.expect(res.data).to.have.property('exercises');
            chai.expect(res.status).to.equal(200);
        })
    })
})


describe('PUT data', () => {
    it('test change exercise entry', () => {
        chai.request('http://localhost:3000')
            .put('/data')
            .send({ id : 0, title : "name", description : "description" })
            .then(function (res) {
                chai.expect(res).to.have.status(200);
            })
            .catch(function (err) {
                throw err;
            });
    })
})

describe('POST data', () => {
    it('test add exercise entry', () => {
        chai.request('http://localhost:3000')
            .post('/data')
            .send({ id : 0, title : "name1", description : "description1" })
            .then(function (res) {
                chai.expect(res).to.have.status(200);
            })
            .catch(function (err) {
                throw err;
            });
    })
})

