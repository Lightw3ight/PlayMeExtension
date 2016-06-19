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
import { SimpleTrackListItemComponent } from './simple-track-list-item.component';

describe('Component: SimpleTrackListItem', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [SimpleTrackListItemComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([SimpleTrackListItemComponent],
      (component: SimpleTrackListItemComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(SimpleTrackListItemComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(SimpleTrackListItemComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-simple-track-list-item></app-simple-track-list-item>
  `,
  directives: [SimpleTrackListItemComponent]
})
class SimpleTrackListItemComponentTestController {
}

