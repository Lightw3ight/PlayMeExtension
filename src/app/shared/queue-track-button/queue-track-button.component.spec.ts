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
import { QueueTrackButtonComponent } from './queue-track-button.component';

describe('Component: QueueTrackButton', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [QueueTrackButtonComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([QueueTrackButtonComponent],
      (component: QueueTrackButtonComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(QueueTrackButtonComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(QueueTrackButtonComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-queue-track-button></app-queue-track-button>
  `,
  directives: [QueueTrackButtonComponent]
})
class QueueTrackButtonComponentTestController {
}

