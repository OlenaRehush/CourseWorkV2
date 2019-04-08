import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailValidator } from '../directives/email.validator.directive';
import { SharedModule } from '../shared/modules/shared.module';
import { UserService } from '../shared/services/user.service';
import { routing } from './account.routing';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, routing, SharedModule
  ],
  declarations: [RegistrationFormComponent, EmailValidator, LoginFormComponent, FacebookLoginComponent],
  providers: [UserService]
})
export class AccountModule { }
