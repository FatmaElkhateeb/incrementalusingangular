import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
users :Array<any>=[
  {
  "name": "Douglas Pace",
  "country": 'UK'
  },
  {
  "name": "Mcleod Mueller",
  "country": 'USA'
  },
  {
  "name": "Day Meyers",
  "country": 'HK'
  },
  {
  "name": "Aguirre Ellis",
  "country": 'UK'
  },
  {
  "name": "Cook Tyson",
  "country": 'USA'
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
