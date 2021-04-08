import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {MyserviceService} from "../myservice.service"

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  studDetails;
  student;
  id:Number;

  constructor(private route: ActivatedRoute) { 
    this.id = Number(this.route.snapshot.params['id']);
    
    this.studDetails = [
      {id:1, firstName: "Ding", lastName: "Tao", email: "DingTao@gmail.com"},
      {id:2, firstName: "Cao", lastName: "Cao", email: "CC@gmail.com"}
    ]

    this.student = this.studDetails.find(x => x.id === this.id);
  }

  ngOnInit(): void {
  }

}
