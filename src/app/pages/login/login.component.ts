import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports:[CommonModule, FormsModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin(): void {
    // Dummy login check - always redirects to dashboard
    if (this.username && this.password) {
      localStorage.setItem('loggedInUser', this.username); // optional
      this.router.navigate(['/dashboard']);
    }
  }
}
