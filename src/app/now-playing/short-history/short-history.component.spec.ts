import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortHistoryComponent } from './short-history.component';

describe('ShortHistoryComponent', () => {
  let component: ShortHistoryComponent;
  let fixture: ComponentFixture<ShortHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
