import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-jleague',
  templateUrl: './header-jleague.component.html',
  styleUrls: ['./header-jleague.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class HeaderJleagueComponent {
  showScrollTopBtn = false;
  isNavbarDark = false;
  isSidenavOpen = false;
  isDropdownOpen = false;
   @Output() scrollDownClick = new EventEmitter<void>();

  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
    this.toggleBodyScroll();

    if (!this.isSidenavOpen) {
      this.isDropdownOpen = false;
    }
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (!this.isSidenavOpen) {
      const scrollY = window.pageYOffset;
      this.showScrollTopBtn = scrollY > 300;
      this.isNavbarDark = scrollY > 50;
    }

    this.updateScrollTopButtonVisibility();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

onScrollDownClick(): void {
  const element = document.querySelector('app-table-league');
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: top - 120,
      behavior: 'smooth',
    });
  }
}


  private toggleBodyScroll(): void {
    const shouldBlockScroll = window.innerWidth < 990 && this.isSidenavOpen;
    document.body.style.overflow = shouldBlockScroll ? 'hidden' : '';
    document.documentElement.style.overflow = shouldBlockScroll ? 'hidden' : '';
  }

  private updateScrollTopButtonVisibility(): void {
    const btn = document.getElementById('scrollTopBtn');
    if (btn) {
      btn.classList.toggle('show', this.showScrollTopBtn);
    }
  }
}
