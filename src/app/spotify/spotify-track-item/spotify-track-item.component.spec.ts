import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyTrackItemComponent } from './spotify-track-item.component';

describe('SpotifyTrackItemComponent', () => {
  let component: SpotifyTrackItemComponent;
  let fixture: ComponentFixture<SpotifyTrackItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyTrackItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyTrackItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
