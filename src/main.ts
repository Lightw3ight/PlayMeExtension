import { browserDynamicPlatform } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { AppModule, environment } from './app';

if (environment.production) {
  enableProdMode();
}

browserDynamicPlatform().bootstrapModule(AppModule);