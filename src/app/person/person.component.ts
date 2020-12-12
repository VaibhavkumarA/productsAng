import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  personName='Mark'
  personAddress='usa'
  personAge=16
  personEmail="m@gmail.com"
  constructor() { }

  ngOnInit(): void {
  }

}
