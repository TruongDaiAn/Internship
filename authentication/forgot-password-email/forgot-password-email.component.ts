import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-email',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './forgot-password-email.component.html',
  styleUrls: ['./forgot-password-email.component.css']
})
export class EmailComponent {

  emailForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]] 
    });
  }

  onSubmit() {
    if (this.emailForm.valid) {
      this.router.navigate(['/Password']);
    } else {
      this.emailForm.markAllAsTouched();
    }
  }

  goBack() {
    this.router.navigate(['/Signin']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}