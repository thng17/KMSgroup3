import { Component, OnInit } from '@angular/core';
import { DataService } from "../../service/data.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(public dataService: DataService) {

  }

  ngOnInit(): void {
  }


}
