import { Routes } from '@angular/router';
import { SigninComponent } from './authentication/sign-in/sign-in.component';
import { EmailComponent } from './authentication/forgot-password-email/forgot-password-email.component';
import { PasswordComponent } from './authentication/forgot-password-pass/forgot-password-pass.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ConfirmRegistrationComponent } from './authentication/confirm-registration/confirm-registration.component';
import { MainPageComponent } from './mainpage/main-page/main-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Signin', pathMatch: 'full' },
  { path: 'Signin', component: SigninComponent },
  { path: 'Email', component: EmailComponent },
  { path: 'Password', component: PasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'confirm-registration', component: ConfirmRegistrationComponent},
  { path: 'main-page', component: MainPageComponent}
]