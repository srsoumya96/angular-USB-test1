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
    "guardianName" : '',
    "dob" : ''
  }

  constructor(private router : Router, private formBuilder: FormBuilder, private rs : RestService) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      name : '',
      userName : '',
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

    this.rs.onSignUp(this.signUpVals);
  }
}