import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

export const routing: ModuleWithProviders = RouterModule.forRoot([
  { path: 'register', component: RegistrationFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'facebook-login', component: FacebookLoginComponent }
]);
