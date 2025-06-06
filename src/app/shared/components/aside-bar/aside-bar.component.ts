import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-aside-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.scss'],
})
export class AsideBarComponent implements OnInit {
  username?: string;
  isSidenavOpen = false;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.user$.subscribe((user) => {
      this.username = user?.username;
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
