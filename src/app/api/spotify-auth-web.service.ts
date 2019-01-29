import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ISpotifyConfig } from './models/spotify';
import { spotifyLoginUrlFactory } from './spotify-login-url.factory';

@Injectable()
export class SpotifyAuthWebService {
    constructor (
        @Inject('SpotifyConfig') private _config: ISpotifyConfig
    ) { }

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
                if (e.key === this._config.authTokenKey) {
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

    private showAuthDialog (onComplete: Function) {
        const width = 400;
        const height = 500;
        const left = (screen.width / 2) - (width / 2);
        const top = (screen.height / 2) - (height / 2);
        const options = 'menubar=no,location=no,resizable=yes,scrollbars=yes,status=no,width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;
        const loginUrl = spotifyLoginUrlFactory(this._config);

        const win = window.open(loginUrl, 'Spotify', options);
        const interval = window.setInterval(() => {
            if (!win || win.closed) {
                window.clearInterval(interval);
                onComplete(win);
            }
        }, 1000000);

        return win;
    }
}
