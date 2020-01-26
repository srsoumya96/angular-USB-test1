import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private rs : RestService, private router : Router) { }

  ngOnInit() {
  }

  onLogin() {
    this.router.navigate(['/login']);
  }

  onCorporateLogin() {
    this.router.navigate(['/']);
  }

}