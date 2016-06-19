import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { PlayMeExtensionAppComponent, environment } from './app';
import {ROUTER_PROVIDERS} from '@angular/router';
import {HashLocationStrategy, PathLocationStrategy, APP_BASE_HREF, LocationStrategy } from '@angular/common'


if (environment.production) {
  enableProdMode();
}

bootstrap(PlayMeExtensionAppComponent,
  [
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, { useValue: '/' }),
    provide(LocationStrategy, { useClass: HashLocationStrategy })
  ]);
