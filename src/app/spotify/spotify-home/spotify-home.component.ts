import { SpotifyService } from 'app/spotify/spotify.service';
import { SpotifyUserService } from './../spotify-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-spotify-home',
  templateUrl: './spotify-home.component.html',
  styleUrls: ['./spotify-home.component.scss']
})
export class SpotifyHomeComponent implements OnInit {
  public currentUser$;

  public playlists;

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
          this.playlists = null;
        }
      });
  }

  private _loadPlaylists () {
    this._spotifyService.getCurrentUserPlaylists()
        .take(1)
        .subscribe(result => {
          this.playlists = result;
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
