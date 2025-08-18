import { Component} from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SigninComponent {

  constructor(private router: Router) {}

  onForgotPassword() {
    this.router.navigate(['/Email']);
  }

  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
