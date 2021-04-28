import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  name: string = "";
  age:Number | undefined;
  data = {};

  @Output() event = new EventEmitter();

  add() {
    console.log(this.name)
    this.data = {
      name: this.name,
      age: this.age
    };

    this.event.emit(this.data);
  }
}

