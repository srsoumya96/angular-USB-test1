import { Injectable } from '@angular/core';
import  { Router } from '@angular/router';

@Injectable()
export class RestService {
  currentUser : string;
  onSignUp(signUpVals) {
    console.log(signUpVals);
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