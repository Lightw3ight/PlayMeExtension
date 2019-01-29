import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyAudioPreviewPlayerComponent } from './spotify-audio-preview-player.component';

describe('SpotifyAudioPreviewPlayerComponent', () => {
  let component: SpotifyAudioPreviewPlayerComponent;
  let fixture: ComponentFixture<SpotifyAudioPreviewPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyAudioPreviewPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyAudioPreviewPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
