import {app} from '../server'
import chai from 'chai'
import chaiHttp from 'chai-http'
import axios from "axios";


chai.use(chaiHttp)

describe('Base Route test', () => {
    it('text "Hello World!"', () => {
        return axios.get('http://localhost:3000/').then(res => {
            chai.expect(res.data).to.equal("Hello World!")
        })
    })
})

describe('GET all todos', () => {
    it('test get all todos', () => {
        chai.request(app)
            .get('/all')
            .end((err, res) =>{
                res.should.have.status(200)
                res.body.should.be.a('array');
            });
    });
});
