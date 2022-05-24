import { Component } from '@angular/core';
import { DataService } from "../../service/data.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  constructor(public dataService: DataService) {

  }

  onClickAddBtn(){
    this.dataService.addToDo();
  }

}
