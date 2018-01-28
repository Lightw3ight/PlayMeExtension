import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyService, SpotifyConfig } from './spotify.service';
import { HttpModule } from '@angular/http';
import { PlaylistListItemComponent } from './playlist-list-item/playlist-list-item.component';
import { SpotifyUserService } from 'app/spotify/spotify-user.service';
import { SpotifyHomeComponent } from './spotify-home/spotify-home.component';
import { MatCardModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        MatCardModule
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
            userAuthToken: localStorage.getItem('angular2-spotify-token')
          }
        }
    ],
    declarations: [
      PlaylistListItemComponent,
      SpotifyHomeComponent
    ],
    exports: [
      SpotifyHomeComponent
    ]
})
export class SpotifyModule { }
