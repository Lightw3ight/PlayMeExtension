import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyAudioPreviewButtonComponent } from './spotify-audio-preview-button.component';

describe('SpotifyAudioPreviewButtonComponent', () => {
  let component: SpotifyAudioPreviewButtonComponent;
  let fixture: ComponentFixture<SpotifyAudioPreviewButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyAudioPreviewButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyAudioPreviewButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
