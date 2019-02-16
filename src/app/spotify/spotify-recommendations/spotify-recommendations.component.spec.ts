import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyRecommendationsComponent } from './spotify-recommendations.component';

describe('SpotifyRecommendationsComponent', () => {
  let component: SpotifyRecommendationsComponent;
  let fixture: ComponentFixture<SpotifyRecommendationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyRecommendationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
