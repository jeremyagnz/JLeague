import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

login() {
  this.authService.login({ email: this.email, password: this.password }).subscribe({
    next: (user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/dashboard']);
      }
    },
    error: () => {
      alert('Credenciales inválidas');
    }
  });
}
}
