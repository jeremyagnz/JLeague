import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLeagueComponent } from './table-league.component';

describe('TableLeagueComponent', () => {
  let component: TableLeagueComponent;
  let fixture: ComponentFixture<TableLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableLeagueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
