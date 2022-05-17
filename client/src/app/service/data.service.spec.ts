import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('task should be not null', () => {
    if(service.getTask().length>0){
      for(let i =0;i<service.getTask().length; i++){
        expect(service.getTask()[i]).not.toBeNull();
      }
    }else expect(service.getTask()).not.toBeNull();
  });

});
