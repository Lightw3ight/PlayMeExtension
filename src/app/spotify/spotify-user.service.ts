import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { SpotifyService } from './spotify.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const LOCALSTORAGEKEY_Auth_Token = 'angular2-spotify-token';

@Injectable()
export class SpotifyUserService {

  public currentUser: Observable<any>;

  private _currentUser: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor (
    private _spotifyService: SpotifyService
  ) {
    this._checkForSavedAuth();

    this.currentUser = this._currentUser.asObservable();
  }

  private _checkForSavedAuth () {
    // TODO: Add some wrapper service for local service access?
    if (!window.localStorage.getItem(LOCALSTORAGEKEY_Auth_Token)) {
      return;
    }

    this._spotifyService.getCurrentUser()
        .take(1)
        .subscribe(user => {
          this._currentUser.next(user);
        });
  }

}
