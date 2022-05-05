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
