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
import { ZoneSelectorComponent } from './zone-selector.component';

describe('Component: ZoneSelector', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ZoneSelectorComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ZoneSelectorComponent],
      (component: ZoneSelectorComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ZoneSelectorComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ZoneSelectorComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-zone-selector></app-zone-selector>
  `,
  directives: [ZoneSelectorComponent]
})
class ZoneSelectorComponentTestController {
}

