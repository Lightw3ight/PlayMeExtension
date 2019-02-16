import { SpotifyAudioPreviewModule } from './spotify-audio-preview/spotify-audio-preview.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MatCardModule, MatIconModule, MatButtonModule, MatMenuModule, MatChipsModule, MatSnackBarModule } from '@angular/material';
import { PlaylistListItemComponent } from './playlist-list-item/playlist-list-item.component';
import { SpotifyHomeComponent } from './spotify-home/spotify-home.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SharedModule } from '../shared';
import { ISpotifyConfig } from '../api/models/spotify';
import { SpotifyRecommendationsComponent } from './spotify-recommendations/spotify-recommendations.component';
export const LOCALSTORAGEKEY_AUTH_TOKEN = 'angular2-spotify-token';
export const LOCALSTORAGEKEY_AUTH_TOKEN_EXPIRY = 'angular2-spotify-token-expiry';
@NgModule({
    imports: [
        // Angular
        CommonModule,
        HttpModule,
        RouterModule,

        // This project
        SharedModule,
        SpotifyAudioPreviewModule,

        // NG Material
        FlexLayoutModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatChipsModule,
        MatSnackBarModule
    ],
    providers: [
        {
            provide: 'SpotifyConfig',
            useValue: <ISpotifyConfig>{
                apiBase: 'https://api.spotify.com/v1',
                authTokenKey: 'angular2-spotify-token',
                authTokenExpiryKey: 'angular2-spotify-token-expiry',
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
        SpotifyRecommendationsComponent
    ],
    exports: [
        SpotifyHomeComponent
    ]
})
export class SpotifyModule { }
