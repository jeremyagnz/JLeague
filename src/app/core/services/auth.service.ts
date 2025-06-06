import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/app/environments/environment';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router,
    private userservice: UserService
  ) {}

  login(credentials: { email: string; password: string }): Observable<User> {
    return this.http
      .get<User[]>(
        `${this.apiUrl}/users?email=${credentials.email}&password=${credentials.password}`
      )
      .pipe(
        map((users) => {
          if (users.length) {
            const user = users[0];
            localStorage.setItem('user', JSON.stringify(user));
            return user;
          } else {
            throw new Error('Usuario o contraseña incorrectos');
          }
        })
      );
  }

  register(data: {
    username: string;
    email: string;
    password: string;
  }): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, data);
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    this.userservice.clearUser();
  }

  getCurrentUser(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }
}
