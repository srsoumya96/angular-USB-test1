import { Injectable } from '@angular/core';
import  { Router } from '@angular/router';

@Injectable()
export class RestService {
  currentUser : string;
  onSignUp() {
    console.log("Enter the details.");
  }
  onSignIn(user, pwd, remop) {
    if(remop == true) {
      localStorage.setItem('currentUser', user);
      sessionStorage.setItem('currentUser', user);
    }
    else {
      sessionStorage.setItem('currentUser', user);
    }
    this.router.navigate(['/dashboard']);
  }
  getCurrentUser() {
    return sessionStorage.getItem('currentUser');
  }
  onSignOut() {
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }
  constructor(private router : Router) { }

}