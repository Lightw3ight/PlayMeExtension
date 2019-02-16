import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyRecentlyPlayedComponent } from './spotify-recently-played.component';

describe('SpotifyRecentlyPlayedComponent', () => {
  let component: SpotifyRecentlyPlayedComponent;
  let fixture: ComponentFixture<SpotifyRecentlyPlayedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyRecentlyPlayedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyRecentlyPlayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
