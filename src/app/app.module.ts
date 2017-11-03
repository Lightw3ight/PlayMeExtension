import { SearchModule } from './search/search.module';
import { QueueModule } from './queue/queue.module';
import { NowPlayingModule } from './now-playing/now-playing.module';
import { HistoryModule } from './history/history.module';
import { ArtistModule } from './artist/artist.module';
import { AlbumModule } from './album/album.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material';
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
        HttpClientModule
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
        SignalRService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
