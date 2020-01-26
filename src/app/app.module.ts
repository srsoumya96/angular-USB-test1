import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app-routing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RestService } from './rest.service';
import { SigninComponent } from './signin/signin.component';
import { FooterComponent } from './footer/footer.component';
import { modelLogin } from './modelLogin';
import { ProfileComponent } from './profile/profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing, ReactiveFormsModule, HttpClientInMemoryWebApiModule.forRoot(modelLogin), HttpClientModule ],
  declarations: [ AppComponent, SignupComponent, HeaderComponent, DashboardComponent, SigninComponent, FooterComponent, ProfileComponent, AboutUsComponent, LoginPageComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ RestService ]
})
export class AppModule { }
