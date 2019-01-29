import { Injectable, Inject } from '@angular/core';
import { ISpotifyConfig, ISpotifyUser } from './models/spotify';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { IHttpAsyncItem } from './models';
import { spotifyLoginUrlFactory } from './spotify-login-url.factory';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class SpotifyAuthChromeService {
    private _currentUser: ReplaySubject<IHttpAsyncItem<ISpotifyUser>> = new ReplaySubject();

    constructor (
        @Inject('SpotifyConfig') private _config: ISpotifyConfig,
        private _snackBar: MatSnackBar
    ) { }

    public login (silentMode?: boolean): Observable<any> {
        return Observable.create(observer => {

            const spotifyLoginUrl = spotifyLoginUrlFactory({
                    ...this._config,
                    redirectUri: window.chrome.identity.getRedirectURL()
                });

            window.chrome.identity.launchWebAuthFlow({
                    'url': spotifyLoginUrl,
                    'interactive': !silentMode
                }, (requestUrl: string) => {
                    if (!requestUrl) {
                      this._snackBar.open('Spotify auth unsuccessful', null, { duration: 3000 });
                      observer.next();
                      observer.complete();

                      return;
                    }

                    const hashMatch = requestUrl.match('#.*');
                    const hash = hashMatch[0].substring(1); // cut off leading #
                    const pairs = hash.split('&');

                    const result: any = {};
                    pairs.forEach(rawPair => {
                        const keyValuePair = rawPair.split('=');
                        result[keyValuePair[0]] = keyValuePair[1];
                    });

                    window.localStorage.setItem(this._config.authTokenKey, result.access_token);

                    const tokenExpiryDate = new Date(new Date().getTime() + result.expires_in * 1000);
                    window.localStorage.setItem(this._config.authTokenExpiryKey, tokenExpiryDate.toJSON());

                    observer.next();
                    observer.complete();
                }
            );
        });
    }
}
