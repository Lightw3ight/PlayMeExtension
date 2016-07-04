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
import { OpinionButtonsComponent } from './opinion-buttons.component';

describe('Component: OpinionButtons', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [OpinionButtonsComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([OpinionButtonsComponent],
      (component: OpinionButtonsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(OpinionButtonsComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(OpinionButtonsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-opinion-buttons></app-opinion-buttons>
  `,
  directives: [OpinionButtonsComponent]
})
class OpinionButtonsComponentTestController {
}

