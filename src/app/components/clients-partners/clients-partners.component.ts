import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-clients-partners',
    templateUrl: './clients-partners.component.html',
    styleUrls: ['./clients-partners.component.scss'],
   standalone: true,
  imports: [CommonModule, RouterModule],
})
export class ClientsPartnersComponent {

}
