import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoNewsComponent } from './video-news.component';

describe('VideoNewsComponent', () => {
  let component: VideoNewsComponent;
  let fixture: ComponentFixture<VideoNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
