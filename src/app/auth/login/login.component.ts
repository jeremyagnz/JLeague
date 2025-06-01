import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: false
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.loading = true;
    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (user) => {
        this.loading = false;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/dashboard']);
        }
      },
      error: () => {
        this.loading = false;
        alert('Credenciales inválidas');
      }
    });
  }
}
