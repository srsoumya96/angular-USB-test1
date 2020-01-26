import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { LoginPageComponent } from './login-page/login-page.component';

const appRoutes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'login', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'dashboard', component: DashboardComponent }
];

export const routing = RouterModule.forRoot(appRoutes);