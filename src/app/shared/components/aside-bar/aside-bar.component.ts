import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aside-bar',
  imports: [CommonModule, RouterModule],
  templateUrl: './aside-bar.component.html',
  styleUrl: './aside-bar.component.scss',
  standalone: true,
})
export class AsideBarComponent {}
