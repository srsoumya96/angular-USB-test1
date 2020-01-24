import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm : FormGroup;
  signUpVals = {
    "name" : '',
    "userName" : '',
    'password' : '',
    "guardianName" : '',
    "dob" : ''
  }
  password = '';
  confpassword = '';

  signUpSuccess = false;

  constructor(private router : Router, private formBuilder: FormBuilder, private rs : RestService) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      name : '',
      userName : '',
      password : '',
      guardianName : '',
      dob : ''
    }
    );
  }

  get f() { return this.signUpForm.controls; }

  onSubmit() {
    this.signUpVals.name = this.f.name.value;
    this.signUpVals.userName = this.f.userName.value;
    this.signUpVals.guardianName = this.f.guardianName.value;
    this.signUpVals.dob = this.f.dob.value;

    this.signUpSuccess = true;
  }
  onRegister() {
    console.log(this.password + ' ' + this.confpassword);
    this.signUpVals.password = this.password;
    this.rs.onSignUp(this.signUpVals);
  }
}