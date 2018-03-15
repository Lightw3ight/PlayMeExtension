import { SpotifyService } from 'app/spotify/spotify.service';
import { SpotifyUserService } from './../spotify-user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'pm-spotify-home',
  templateUrl: './spotify-home.component.html',
  styleUrls: ['./spotify-home.component.scss']
})
export class SpotifyHomeComponent implements OnInit {
  public currentUser$;

  public playlists$: Observable<IHttpAsyncItem<any>>;

  constructor (
    private _spotifyService: SpotifyService,
    private _spotifyUserService: SpotifyUserService
  ) {}

  ngOnInit () {
    this.currentUser$ = this._spotifyUserService.currentUser;

    this.currentUser$
      .subscribe(user => {
        if (user) {
          this._loadPlaylists();
        } else {
          this.playlists$ = Observable.of({
            isLoading: false,
            result: null
          });
        }
      });
  }

  private _loadPlaylists () {
    this.playlists$ = this._spotifyService.getCurrentUserPlaylists()
      .take(1)
      .map((result) => ({
        isLoading: false,
        result: result
      }))
      .startWith({
        isLoading: true,
        result: null
      });
  }

  login () {

    if (document.location.protocol.indexOf('chrome') >= 0) {
      this._spotifyUserService.loginForChromeExtension();
    } else {
      // TODO: Some useful error handling?
      this._spotifyService.login().subscribe(
        token => { },
        err => console.error(err),
        () => { }
      );
    }

  }

  logout () {
    this._spotifyUserService.clearAuthToken();
  }

}
