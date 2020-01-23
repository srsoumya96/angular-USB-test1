import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name : string;
  userName : string;
  guardianName : string;
  dob : Date;
  password : string;

  onSubmit() {
    console.log(this.dob);
  }

  constructor(private router : Router, private rs : RestService) { }

  ngOnInit() {
  }

}