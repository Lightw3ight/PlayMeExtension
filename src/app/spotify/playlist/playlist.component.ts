import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { SpotifyService } from 'app/spotify/spotify.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'pm-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  public playlist$: Observable<IHttpAsyncItem<any>>;

  constructor (
    private _route: ActivatedRoute,
    private _spotifyService: SpotifyService
  ) { }

  ngOnInit () {
    this._route.params
        .take(1)
        .subscribe(params => {
          const playlistId = params['id'];
          const playlistOwnerId = params['user'];

          this.playlist$ = this._spotifyService
              .getPlaylist(playlistOwnerId, playlistId)
              .take(1)
              .map(playlist => ({
                isLoading: false,
                result: playlist
              }))
              .startWith({
                isLoading: true,
                result: null
              });

    });
  }

}
