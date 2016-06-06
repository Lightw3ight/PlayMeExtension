import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './appComponent';
import {enableProdMode, provide} from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router';
import {HashLocationStrategy, PathLocationStrategy, APP_BASE_HREF, LocationStrategy } from '@angular/common'

enableProdMode();

bootstrap(AppComponent,
[
     ROUTER_PROVIDERS,
     provide(APP_BASE_HREF, { useValue: '/' }),
     provide(LocationStrategy, {useClass : HashLocationStrategy})]);
