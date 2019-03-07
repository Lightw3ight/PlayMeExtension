import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyTopTracksComponent } from './spotify-top-tracks.component';

describe('SpotifyTopTracksComponent', () => {
  let component: SpotifyTopTracksComponent;
  let fixture: ComponentFixture<SpotifyTopTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyTopTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyTopTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
