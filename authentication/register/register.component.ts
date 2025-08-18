import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  isLoading: boolean = false;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      birthDate: ['', Validators.required],
      idNumber: [''],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      gender: ['male'],
      nationality: ['Vietnam', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,11}$/)]],
      username: ['', Validators.required],
      userType: ['individual', Validators.required]
    });
  }

  onSubmit(): void {
    this.errorMessage = null;

    if (this.registerForm.invalid) {
      this.markFormGroupTouched(this.registerForm);
      this.errorMessage = "Vui lòng điền đầy đủ các trường bắt buộc.";
      return;
    }

    this.isLoading = true; // Bắt đầu loading
    const userEnteredEmail = this.registerForm.get('email')?.value;

    console.log('Form submitted:', this.registerForm.value);
    console.log('User entered email:', userEnteredEmail);

    setTimeout(() => {
      this.isLoading = false;
      if (userEnteredEmail) {
        this.router.navigate(['/confirm-registration'], {
          queryParams: { email: userEnteredEmail }
        });
      } else {
        this.errorMessage = "Lỗi: Không thể lấy thông tin email từ form.";
        console.error("Could not get email from a valid form.");
      }
    }, 1000);
  }

  goBack(): void {
    this.router.navigate(['/Signin']);
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
