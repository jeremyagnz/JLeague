import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { User } from '../models/user.model';
import { UserService } from '../core/services/user.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: false,
})
export class DashboardComponent implements OnInit {
  user: User | null = null;
  username: string = '';
  pageTitle: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUserData();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const childRoute = this.getDeepestChild(this.route);
        this.pageTitle = childRoute.snapshot.data['titulo'] || '';
      });
  }

  getUserData() {
    const userData = localStorage.getItem('user');
    if (userData !== null) {
      const parsedUser: User = JSON.parse(userData);
      this.user = parsedUser;
      this.username = parsedUser.username;
      this.userService.setUser(this.user);
    }
  }

  private getDeepestChild(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
