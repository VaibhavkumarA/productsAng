import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  mobile={
    model:'Samsung note 12',
    company:'Samsung',
    price:80000,

    configuration:{
      cpu:'snapdragon',
      ram:'8gb',
      storage:'128gb'
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
