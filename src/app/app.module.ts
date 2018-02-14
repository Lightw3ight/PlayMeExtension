import { KarmaService } from './api/karma.service';
import { LikesModule } from './likes/likes.module';
import { SearchModule } from './search/search.module';
import { QueueModule } from './queue/queue.module';
import { NowPlayingModule } from './now-playing/now-playing.module';
import { HistoryModule } from './history/history.module';
import { ArtistModule } from './artist/artist.module';
import { AlbumModule } from './album/album.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { routing, appRoutingProviders } from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import {
    SearchService,
    ArtistService,
    AlbumService,
    QueueService,
    AudioZoneService,
    UserInfoService,
    SignalRService
} from './api';
import * as Raven from 'raven-js';

import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material';
import { environment } from './environment';

Raven
  .config('https://4a8c4ab293924b68b0826a87a1d93b06@sentry.io/287934', {
    environment: environment.production ? 'production' : 'dev'
  })
  .install();

export class RavenErrorHandler implements ErrorHandler {
  handleError(err:any) : void {
    Raven.captureException(err);
  }
}

@NgModule({
    imports: [
        BrowserModule,
        routing,
        CoreModule,
        SharedModule,
        BrowserAnimationsModule,
        AlbumModule,
        ArtistModule,
        HistoryModule,
        NowPlayingModule,
        QueueModule,
        SearchModule,
        MatSidenavModule,
        HttpClientModule,
        LikesModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        appRoutingProviders,
        SearchService,
        ArtistService,
        AlbumService,
        QueueService,
        AudioZoneService,
        UserInfoService,
        SignalRService,
        KarmaService,
        // { provide: ErrorHandler, useClass: RavenErrorHandler }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
