import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Task } from "../../model/Task";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  public tasks: Task[] = [];
  public form: FormGroup;
  private todo: FormControl | undefined;

  constructor() {
    this.form = new FormGroup({
      todo: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  addToDo(){
    const toDoTitle = this.form.value.todo;
    this.tasks.push(toDoTitle);
    this.form.reset('');
    //To test if it works
    console.log(this.tasks);
  }
}
