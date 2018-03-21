import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MatCardModule, MatIconModule, MatButtonModule, MatMenuModule, MatChipsModule } from '@angular/material';

import { SpotifyService, SpotifyConfig } from './spotify.service';
import { PlaylistListItemComponent } from './playlist-list-item/playlist-list-item.component';
import { SpotifyUserService } from 'app/spotify/spotify-user.service';
import { SpotifyHomeComponent } from './spotify-home/spotify-home.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SpotifyTrackItemComponent } from './spotify-track-item/spotify-track-item.component';
import { SharedModule } from '../shared';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        RouterModule,
        SharedModule,

        FlexLayoutModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatChipsModule
    ],
    providers: [
        SpotifyService,
        SpotifyUserService,
        { provide: 'SpotifyConfig' ,
          useValue: {
            clientId: 'e027323d365849d89bf0ad486f56b2e2',
            redirectUri: document.location.origin + '/assets/spotify/callback.html',
            scope: 'user-follow-modify user-follow-read playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private user-library-read user-library-modify user-read-private user-top-read user-read-recently-played',
                // If you already have an authToken
            getUserAuthToken: () => localStorage.getItem('angular2-spotify-token')
          }
        }
    ],
    declarations: [
      PlaylistListItemComponent,
      SpotifyHomeComponent,
      PlaylistComponent,
      SpotifyTrackItemComponent
    ],
    exports: [
      SpotifyHomeComponent
    ]
})
export class SpotifyModule { }
