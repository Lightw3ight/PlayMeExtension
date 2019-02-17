import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortQueueComponent } from './short-queue.component';

describe('ShortQueueComponent', () => {
  let component: ShortQueueComponent;
  let fixture: ComponentFixture<ShortQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
