import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signInForm : FormGroup;

  signInVals = {
    "userName" : '',
    "password" : '',
    "remop" : false
  }
  
  constructor(private router : Router, private formBuilder: FormBuilder, private rs : RestService) { 
     
   }

  ngOnInit() {
    this.signInForm = this.formBuilder.group ({
      userName : localStorage.currentUser,
      password : '',
      remop : false
    })
  }
  get f() { return this.signInForm.controls; }

  onSubmit() {
    this.signInVals.userName = this.f.userName.value;
    this.signInVals.password = this.f.password.value;
    this.signInVals.remop = this.f.remop.value;
    this.rs.onSignIn(this.signInVals);
  }
}