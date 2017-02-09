import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routes';
import 'bootstrap';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ModalModule } from 'ng2-bootstrap/modal';

import {
    SearchService,
    ArtistService,
    AlbumService,
    QueueService,
    AudioZoneService,
    UserInfoService,
    SignalRService
} from './api';

import { AlbumComponent } from './album';
import { SearchComponent } from './search';
import { ArtistComponent } from './artist';
import { QueueComponent } from './queue';
import { HistoryComponent } from './history';
import { NowPlayingComponent } from './now-playing';
import { PlayMeExtensionAppComponent } from './play-me-extension.component';
import { ArtistListItemComponent } from './search/artist-list-item';
import { AlbumListItemComponent } from './search/album-list-item'
import { ZoneSelectorComponent } from './now-playing';
import { SharedModule } from './shared/shared.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        SharedModule,
        HttpModule,
        TabsModule.forRoot(),
        DropdownModule.forRoot(),
        ModalModule.forRoot()
    ],
    declarations: [
        PlayMeExtensionAppComponent,
        ZoneSelectorComponent,
        AlbumListItemComponent,
        ArtistListItemComponent,
        AlbumComponent,
        SearchComponent,
        ArtistComponent,
        QueueComponent,
        HistoryComponent,
        NowPlayingComponent,
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
    bootstrap: [PlayMeExtensionAppComponent]
})
export class AppModule { }
