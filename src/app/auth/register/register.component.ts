import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    standalone: false
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';
  loading = false;

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (!this.username || !this.email || !this.password) {
      alert('Por favor, completa todos los campos');
      return;
    }

    this.loading = true;

    this.authService.register({
      username: this.username,
      email: this.email,
      password: this.password
    }).subscribe({
      next: (user) => {
        this.loading = false;
        alert('Usuario registrado con éxito');
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.loading = false;
        console.error(err);
        alert('Error al registrar usuario');
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
