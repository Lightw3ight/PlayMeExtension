import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { QueuedTrackComponent } from './queued-track.component';

describe('Component: QueuedTrack', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [QueuedTrackComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([QueuedTrackComponent],
      (component: QueuedTrackComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(QueuedTrackComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(QueuedTrackComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-queued-track></app-queued-track>
  `,
  directives: [QueuedTrackComponent]
})
class QueuedTrackComponentTestController {
}

