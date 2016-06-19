import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PlayMeExtensionAppComponent } from '../app/play-me-extension.component';

beforeEachProviders(() => [PlayMeExtensionAppComponent]);

describe('App: PlayMeExtension', () => {
  it('should create the app',
      inject([PlayMeExtensionAppComponent], (app: PlayMeExtensionAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'play-me-extension works!\'',
      inject([PlayMeExtensionAppComponent], (app: PlayMeExtensionAppComponent) => {
    expect(app.title).toEqual('play-me-extension works!');
  }));
});
