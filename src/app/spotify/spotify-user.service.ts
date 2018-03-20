import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { SpotifyService } from './spotify.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { request } from 'http';

const LOCALSTORAGEKEY_Auth_Token = 'angular2-spotify-token';
const LOCALSTORAGEKEY_Auth_Token_expiry = 'angular2-spotify-token-expiry';

// FOR TESTING: To see the Spotify 'allow access' modal, revoke app access from:
//  https://www.spotify.com/nz/account/apps/

@Injectable()
export class SpotifyUserService {

  public currentUser: Observable<IHttpAsyncItem<any>>;

  private _currentUser: BehaviorSubject<IHttpAsyncItem<any>> = new BehaviorSubject(null);

  constructor (
    private _spotifyService: SpotifyService
  ) {
    this._checkForSavedAuth();

    this.currentUser = this._currentUser.asObservable();

    window.addEventListener('storage', (e) => this._storageChangedHandler(e), false);

  }

  private _storageChangedHandler (e) {
    if (e.key === 'angular2-spotify-token') {
      this._checkForSavedAuth();
    }
  }

  private _checkForSavedAuth () {
    this._currentUser.next({ isLoading: true, result: null });

    // TODO: Add some wrapper service for local service access?
    if (!window.localStorage.getItem(LOCALSTORAGEKEY_Auth_Token)) {
      this._currentUser.next({ isLoading: false, result: null });
      return;
    }

    if (this._spotifyService.shouldRefreshToken()) {
      if (document.location.protocol.indexOf('chrome') >= 0) {
        this.loginForChromeExtension(true);
      } else {
        this._spotifyService.silentTokenRefresh();
      }
    }

    this._spotifyService.getCurrentUser()
        .take(1)
        .subscribe(user => {
          this._currentUser.next({ isLoading: false, result: user });
        });
  }

  public loginForChromeExtension (silentMode?: boolean) {
    let loginUrl = this._spotifyService.makeLoginUrl({
      redirectUri: window.chrome.identity.getRedirectURL()
    });

    window.chrome.identity.launchWebAuthFlow({
        'url': loginUrl,
        'interactive': !silentMode
      }, (requestUrl: string) => {
          let hashMatch = requestUrl.match('#.*');
          let hash = hashMatch[0].substring(1); // cut off leading #
          let pairs = hash.split('&');

          let result: any = {};
          pairs.forEach(rawPair => {
            let keyValuePair = rawPair.split('=');
            result[keyValuePair[0]] = keyValuePair[1];
          });

          window.localStorage.setItem(LOCALSTORAGEKEY_Auth_Token, result.access_token);

          let tokenExpiryDate = new Date(new Date().getTime() + result.expires_in * 1000);
          window.localStorage.setItem(LOCALSTORAGEKEY_Auth_Token_expiry, tokenExpiryDate.toJSON());

          this._checkForSavedAuth();
        }
      );
  }

  public clearAuthToken () {
    window.localStorage.removeItem(LOCALSTORAGEKEY_Auth_Token);
    this._currentUser.next({ isLoading: false, result: null });
  }
}
