import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddTaskComponent } from './add-task.component';
import {By} from "@angular/platform-browser";

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaskComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(AddTaskComponent);
      component = fixture.componentInstance;
      });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should click Add button', fakeAsync(() => {
    spyOn(component, 'onClickAddBtn');

    let button = fixture.debugElement.query(By.css('#addButton'));
    button.triggerEventHandler('click', null);
    tick();
    expect(component.onClickAddBtn).toHaveBeenCalled();
  }));

});
