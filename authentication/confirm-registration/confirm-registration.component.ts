import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, Params } from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-registration',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './confirm-registration.component.html',
  styleUrls: ['./confirm-registration.component.css']
})
export class ConfirmRegistrationComponent implements OnInit {
  userEmail: string | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => { // Thêm (params: Params)
      if (params['email']) {
        this.userEmail = params['email'];
        console.log('Email received on confirmation page:', this.userEmail);
      } else {
        console.warn('No email query parameter found for confirmation page.');
      }
    });
  }
}
