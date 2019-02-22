import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyTrackDetailComponent } from './spotify-track-detail.component';

describe('SpotifyTrackDetailComponent', () => {
  let component: SpotifyTrackDetailComponent;
  let fixture: ComponentFixture<SpotifyTrackDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyTrackDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyTrackDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
