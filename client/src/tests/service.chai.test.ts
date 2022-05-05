import 'core-js/es7/reflect';
import 'mocha';
import * as Chai from 'chai';
let expect = Chai.expect;
import { DataService } from '../app/service/data.service'


describe('SharedService', () => {
  let service: DataService;

  beforeEach(() => {
    service = new DataService();
  })

  // Test data service creation
  it('should be an object', () => {
    expect(service).to.be.an('object');
  })


  it('should contain a task', () => {
    service.addToDo()
    expect(service.tasks.length).to.equal(1)
  })

});
