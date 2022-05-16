import { Injectable } from '@angular/core';
import { Task } from "../model/Task";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public tasks: Task [] = [];
  public form: FormGroup;
  private todo: FormControl | undefined;

  constructor(private http : HttpClient) {
    this.form = new FormGroup({
      todo: new FormControl(),
    })
    this.updateList()
  }

  addToDo(){
    const title = this.form.value.todo;
    const description = "Not implemented";

    lastValueFrom(this.http.post("http://localhost:3000/data", {title, description}, {responseType: 'text'})).then(() => {
      this.form.reset('');
      this.updateList()
      //To test if it works
      console.log(this.tasks);
    })
  }

  updateList() {
    lastValueFrom(this.http.get("http://localhost:3000/all")).then((res:any) => {
      this.tasks = res.exercises;
    });
  }

}
