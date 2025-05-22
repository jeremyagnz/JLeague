import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsPartnersComponent } from './clients-partners.component';

describe('ClientsPartnersComponent', () => {
  let component: ClientsPartnersComponent;
  let fixture: ComponentFixture<ClientsPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsPartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
