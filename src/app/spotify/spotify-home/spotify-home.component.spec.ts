import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyHomeComponent } from './spotify-home.component';

describe('SpotifyHomeComponent', () => {
  let component: SpotifyHomeComponent;
  let fixture: ComponentFixture<SpotifyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
