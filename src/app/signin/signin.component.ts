import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

   userName : string;
   password : string;
   remop : boolean;
  onSubmit(user, pwd, remop) {
    this.rs.onSignIn(user, pwd, remop);
  }

  constructor(private router : Router, private rs : RestService) { 
     
   }

  ngOnInit() {
    localStorage.currentUser != null ? this.userName = localStorage.currentUser : {};
     localStorage.password != null ? this.password = localStorage.password : {};
  }

}