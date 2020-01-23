import { Injectable } from '@angular/core';
import  { Router } from '@angular/router';

@Injectable()
export class RestService {
  currentUser : string;
  onSignUp(signUpVals) {
    console.log(signUpVals);
    this.router.navigate(['/']);
  }
  onSignIn(signInVals) {
    console.log(signInVals);
    if(signInVals.remop == true) {
      localStorage.setItem('currentUser', signInVals.userName);
      sessionStorage.setItem('currentUser', signInVals.userName);
    }
    else {
      sessionStorage.setItem('currentUser', signInVals.userName);
    }
    this.router.navigate(['/dashboard']);
  }
  checkLogin() {
    if(this.router.url != "/signup")
      sessionStorage.currentUser == null ? this.router.navigate(['/']) : {};
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