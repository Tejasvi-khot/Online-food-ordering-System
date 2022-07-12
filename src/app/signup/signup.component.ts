import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userName: string = 'Tejasvi';
  password:string='Tejasvi@123'
  
  @Output() login = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  submit()
  {
  console.log(this.userName)
  this.login.emit(this.userName);
  console.log(this.password)
  this.login.emit(this.password);
  }
}
