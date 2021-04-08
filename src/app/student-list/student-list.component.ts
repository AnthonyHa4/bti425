import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studList = [
    {id:1, firstName: "Ding"},
    {id:2, firstName: "Cao"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
