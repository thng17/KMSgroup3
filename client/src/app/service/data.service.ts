import { Injectable } from '@angular/core';
import { Task } from "../model/Task";
import {FormControl, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public tasks: Task [] = [];
  public form: FormGroup;
  private todo: FormControl | undefined;

  constructor() {
    this.form = new FormGroup({
      todo: new FormControl(),
    })
  }

  addToDo(){
    const toDoTitle = this.form.value.todo;
    this.tasks.push(toDoTitle);
    this.form.reset('');
    //To test if it works
    console.log(this.tasks);
  }
  getTask(){
    return this.tasks;
  }

}
