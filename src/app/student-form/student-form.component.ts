import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import {FormsModule} from '@angular/forms';
import { studentDetails } from "../studentDetails"

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})

export class StudentFormComponent implements OnInit {

  constructor() { }

  student: studentDetails;
  studentDB: studentDetails;

  cities: any[];

  ngOnInit(): void {
    this.cities = [
      { name: "Toronto" },
      { name: "Bingo" },
      { name: "Dingo" },
      { name: "Tingo" },
      { name: "Cingo" }
    ];

    this.student = {
      id: 22,
      firstName: "Anthony",
      lastName: "Ha",
      gender: "Male",
      email: "ah@email.com",
      city: "Mandingo"
    };
  }

  onSubmit(firstForm: NgForm) {
    if (firstForm.valid) {
      this.studentDB = {
        id: firstForm.value.id,
        firstName: firstForm.value.firstname,
        lastName: firstForm.value.lastname,
        email: firstForm.value.email,
        city: firstForm.value.city,
        gender: firstForm.value.gender
      }
    };

  }

}
