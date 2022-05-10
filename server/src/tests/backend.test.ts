import chai from 'chai'
import chaiHttp from 'chai-http'
import axios from "axios";

chai.use(chaiHttp)

describe('Base Route test', () => {
    it('text "Hello World!"', () => {
        return axios.get('http://localhost:3000/').then(res => {
            chai.expect(res.data).to.equal('Hello World!')
        })
    })
})

describe('GET all todos', () => {
    it('test get all todos', () => {
        return axios.get('http://localhost:3000/all').then(res => {
            chai.expect(res.data).to.have.property('exercises');
            chai.expect(res.status).to.equal(200);
        })
    })
})
