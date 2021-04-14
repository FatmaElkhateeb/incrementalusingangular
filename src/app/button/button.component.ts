import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() value:any;
  @Output() updatevalue= new EventEmitter();  

  increment(){
    this.updatevalue.emit(this.value + 1 );
    
  }
  
  decrement(){

    if(this.value>0)
    {
    this.value -= 1;}
    else {
      this.value=this.value;
    }
    this.updatevalue.emit(this.value);

  }
  constructor() { }

  ngOnInit(): void {
  }
}
