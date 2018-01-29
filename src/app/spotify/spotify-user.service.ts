import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { SpotifyService } from './spotify.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { request } from 'http';

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

  public loginForChromeExtension () {
    let loginUrl = this._spotifyService.makeLoginUrl({
      redirectUri: window.chrome.identity.getRedirectURL()
    });

    window.chrome.identity.launchWebAuthFlow({
        'url': loginUrl,
        'interactive': true
      }, (requestUrl: string) => {
          let hashMatch = requestUrl.match('#.*');
          let hash = hashMatch[0].substring(1); // cut off leading #
          let pairs = hash.split('&');

          let result: any = {};
          pairs.forEach(rawPair => {
            let keyValuePair = rawPair.split('=');
            result[keyValuePair[0]] = keyValuePair[1];
          });

          window.localStorage.setItem(LOCALSTORAGEKEY_Auth_Token, result.access_token)

          this._checkForSavedAuth();
        }
      );
  }

  

}
