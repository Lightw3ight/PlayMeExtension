import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { routing, appRoutingProviders } from './app.routes';
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
import { SearchComponent, ArtistListItemComponent, AlbumListItemComponent } from './search';
import { ArtistComponent } from './artist';
import { QueueComponent } from './queue';
import { HistoryComponent } from './history';
import { NowPlayingComponent } from './now-playing';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        SharedModule,
        CoreModule,
        HttpModule,
        MaterialModule.forRoot(),
        FlexLayoutModule.forRoot(),
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        AlbumListItemComponent,
        ArtistListItemComponent,
        AlbumComponent,
        SearchComponent,
        ArtistComponent,
        QueueComponent,
        HistoryComponent,
        NowPlayingComponent
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
