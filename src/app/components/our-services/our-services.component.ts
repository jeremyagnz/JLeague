import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-our-services',
    templateUrl: './our-services.component.html',
    styleUrls: ['./our-services.component.scss'],
     standalone: true,
  imports: [CommonModule, RouterModule],
})
export class OurServicesComponent {

}
