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
  public todo: string = '';
  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      todo: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  clearInput(){
    this.form.reset('');
  }

}
