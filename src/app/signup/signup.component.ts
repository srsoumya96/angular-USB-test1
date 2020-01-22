import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user : string;
  pwd : string;
  onSubmit(user, pwd) {
    this.user = user;
    this.pwd = pwd;
    this.rs.onSignUp(user);
  }

  constructor(private router : Router, private rs : RestService) { }

  ngOnInit() {
  }

}