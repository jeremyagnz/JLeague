import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header-jleague',
  templateUrl: './header-jleague.component.html',
  styleUrls: ['./header-jleague.component.scss']
})
export class HeaderJleagueComponent {
showScrollTopBtn = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTopBtn = window.pageYOffset > 300;
    const btn = document.getElementById('scrollTopBtn');
    if (btn) {
      if (this.showScrollTopBtn) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
