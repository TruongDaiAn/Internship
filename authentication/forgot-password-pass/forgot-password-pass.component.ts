import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-password',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './forgot-password-pass.component.html',
  styleUrl: './forgot-password-pass.component.css'
})
export class PasswordComponent {

  password: string = '';
  confirmPassword: string = '';
  showPassword: boolean = false;
  showPassword2: boolean = false;
  passwordMismatch: boolean = false;
  
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  togglePassword2() {
    this.showPassword2 = !this.showPassword2;
  }
  
  onSubmit() {
    if (this.password !== this.confirmPassword) {
      this.passwordMismatch = true;
      return;
    }

    this.passwordMismatch = false;
  }

  constructor(private router: Router) {}

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
