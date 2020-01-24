import { Injectable } from '@angular/core';
import  { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class RestService {
  currentUser : string;
  profiles : any;
  url = 'app/model';
  onSignUp(signUpVals) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.http.post(this.url, signUpVals, {headers});
    window.alert('Please Sign In to Continue...');
    this.router.navigate(['/']);

  }
  onSignIn(signInVals) {
    var isPresent = this.profiles.some(function(el){ return el.name === signInVals.userName}) && this.profiles.some(function(el){ return el.password === signInVals.password});
    if(isPresent == false) {
      window.alert('Pleae Enter Correct Credentials.');
      this.router.navigate(['/']);
    }
    else if(signInVals.remop == true) {
      localStorage.setItem('currentUser', signInVals.userName);
      sessionStorage.setItem('currentUser', signInVals.userName);
    }
    else {
      sessionStorage.setItem('currentUser', signInVals.userName);
    }
    this.router.navigate(['/dashboard']);
  }
  getProfiles () {
    this.http.get(this.url).subscribe(profile => {
      this.profiles = profile,
      console.log(this.profiles);
    })
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
  constructor(private router : Router, private http: HttpClient) { }

}