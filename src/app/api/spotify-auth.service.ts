import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ISpotifyConfig, ISpotifyUser } from './models/spotify';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { IHttpAsyncItem } from './models';
import { SpotifyAuthChromeService } from './spotify-auth-chrome.service';
import { SpotifyAuthWebService } from './spotify-auth-web.service';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { spotifyLoginUrlFactory } from './spotify-login-url.factory';

const TOKEN_REFRESH_BUFFER_MINS = 2;

// FOR TESTING: To see the Spotify 'allow access' modal, revoke app access from:
// https://www.spotify.com/nz/account/apps/

@Injectable()
export class SpotifyAuthService {
    private _isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    public get isLoggedIn$ (): Observable<boolean> {
        return this._isLoggedIn$.asObservable();
    }

    constructor (
        private _chromeAuthService: SpotifyAuthChromeService,
        private _webAuthService: SpotifyAuthWebService,
        @Inject('SpotifyConfig') private _config: ISpotifyConfig
    ) {
        this.checkForSavedAuth();
        window.addEventListener('storage', (e) => this.storageChangedHandler(e), false);
    }

    public login (silentMode = false): Observable<any> {
        if (this.isRunningAsChromeExtension()) {
            return this._chromeAuthService.login(silentMode).pipe(
                tap(() => this.checkForSavedAuth())
            );
        } else {
            return this._webAuthService.login();
        }
    }

    public clearAuthToken () {
        window.localStorage.removeItem(this._config.authTokenKey);
        window.localStorage.removeItem(this._config.authTokenExpiryKey);

        this._isLoggedIn$.next(false);
    }

    private storageChangedHandler (e) {
        if (e.key === 'angular2-spotify-token') {
            this.checkForSavedAuth();
        }
    }

    private isRunningAsChromeExtension () {
        return document.location.protocol.indexOf('chrome') >= 0;
    }

    private checkForSavedAuth () {
        // TODO: Add some wrapper service for local service access?
        if (!window.localStorage.getItem(this._config.authTokenKey)) {
            this._isLoggedIn$.next(false);
            return;
        }

        if (this.shouldRefreshToken()) {
            if (document.location.protocol.indexOf('chrome') >= 0) {
                this.login(true);
            } else {
                this.silentTokenRefresh().subscribe(() => {
                    // trigger observable
                });
            }
        }

        this._isLoggedIn$.next(true);
    }


    public shouldRefreshToken (): boolean {
        if (!window.localStorage.getItem(this._config.authTokenKey)) {
            return false;
        }

        const tokenExpiryStr = window.localStorage.getItem(this._config.authTokenExpiryKey);
        if (!tokenExpiryStr) { return false; }

        const tokenExpiry = new Date(tokenExpiryStr);
        if (!tokenExpiry) { return false; }

        const maxBufferPeriod = new Date(new Date().getTime() - TOKEN_REFRESH_BUFFER_MINS * 60 * 1000);
        return maxBufferPeriod > tokenExpiry;
    }

    public silentTokenRefresh (): Observable<any> {
        return Observable.create(observer => {
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = spotifyLoginUrlFactory(this._config);

            let authCompleted = false;

            const storageChanged = (e) => {
                if (e.key === 'angular2-spotify-token') {
                    if (iframe) {
                        document.body.removeChild(iframe);
                    }
                    authCompleted = true;

                    // this.config.userAuthToken = e.newValue;
                    window.removeEventListener('storage', storageChanged, false);

                    observer.next(e.newValue);
                    observer.complete();
                }
            };

            window.addEventListener('storage', storageChanged, false);

            // TODO: Add some kinda timeout (3s?) to send a observer.error()
            document.body.appendChild(iframe);
        });
    }
}
