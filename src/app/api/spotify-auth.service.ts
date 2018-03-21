import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ISpotifyConfig } from '../models/spotify';

const LOCALSTORAGEKEY_Auth_Token = 'angular2-spotify-token';
const LOCALSTORAGEKEY_Auth_Token_expiry = 'angular2-spotify-token-expiry';
const TOKEN_REFRESH_BUFFER_MINS = 2;

@Injectable()
export class SpotifyAuthService {
    constructor (
        @Inject('SpotifyConfig') private config: ISpotifyConfig
    ) {
        config.apiBase = 'https://api.spotify.com/v1';
    }

    public login (): Observable<any> {
        return Observable.create(observer => {
            let authCompleted = false;

            const authWindow = this.showAuthDialog(
                () => {
                    if (!authCompleted) {
                        observer.error('Login rejected error');
                    }
                }
            );

            const storageChanged = (e) => {
                if (e.key === LOCALSTORAGEKEY_Auth_Token) {
                    if (authWindow) {
                        authWindow.close();
                    }
                    authCompleted = true;

                    // this.config.userAuthToken = e.newValue;
                    window.removeEventListener('storage', storageChanged, false);
                    observer.next(e.newValue);
                    observer.complete();
                }
            };

            window.addEventListener('storage', storageChanged, false);
        });
    }


    public shouldRefreshToken (): boolean {
        if (!window.localStorage.getItem(LOCALSTORAGEKEY_Auth_Token)) {
            return false;
        }

        const tokenExpiryStr = window.localStorage.getItem(LOCALSTORAGEKEY_Auth_Token_expiry);
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
            iframe.src = this.makeLoginUrl();

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

    public makeLoginUrl (config?) {
        const params = {
            client_id: this.config.clientId,
            redirect_uri: (config && config.redirectUri) || this.config.redirectUri,
            scope: this.config.scope || '',
            response_type: 'token'
        };

        return 'https://accounts.spotify.com/authorize?' + this.toQueryString(params);
    }

    private showAuthDialog (onComplete: Function) {
        const width = 400;
        const height = 500;
        const left = (screen.width / 2) - (width / 2);
        const top = (screen.height / 2) - (height / 2);
        const options = 'menubar=no,location=no,resizable=yes,scrollbars=yes,status=no,width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;
        const loginUrl = this.makeLoginUrl();

        const win = window.open(loginUrl, 'Spotify', options);
        const interval = window.setInterval(() => {
            if (!win || win.closed) {
                window.clearInterval(interval);
                onComplete(win);
            }
        }, 1000000);

        return win;
    }

    private toQueryString (obj: Object): string {
        const parts = [];
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
            }
        }
        return parts.join('&');
    }
}
