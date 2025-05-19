import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JLeagueComponent } from './jleague.component';

describe('JLeagueComponent', () => {
  let component: JLeagueComponent;
  let fixture: ComponentFixture<JLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JLeagueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
