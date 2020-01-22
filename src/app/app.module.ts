import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app-routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RestService } from './rest.service';
import { SigninComponent } from './signin/signin.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, SignupComponent, HeaderComponent, DashboardComponent, SigninComponent, FooterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [RestService]
})
export class AppModule { }
