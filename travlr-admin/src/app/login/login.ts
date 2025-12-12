import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  username = '';
  password = '';
  error?: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(form: NgForm): void {
    if (form.invalid) return;

    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        // Login success → go to trip list
        this.router.navigate(['/list']);
      },
      error: (err) => {
        console.error(err);
        this.error = 'Login failed. Check your username and password.';
      }
    });
  }
}
