import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-video-news',
    templateUrl: './video-news.component.html',
    styleUrls: ['./video-news.component.scss'],
     standalone: true,
  imports: [CommonModule, RouterModule],
})
export class VideoNewsComponent {

}
