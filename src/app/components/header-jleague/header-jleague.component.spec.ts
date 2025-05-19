import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderJleagueComponent } from './header-jleague.component';

describe('HeaderJleagueComponent', () => {
  let component: HeaderJleagueComponent;
  let fixture: ComponentFixture<HeaderJleagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderJleagueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderJleagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
