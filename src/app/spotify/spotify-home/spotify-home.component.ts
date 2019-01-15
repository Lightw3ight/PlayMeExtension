import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SpotifyService, SpotifyAuthService } from '../../api';
import { map, startWith, take, switchMap, filter, catchError } from 'rxjs/operators';
import { IHttpAsyncItem } from '../../api/models';
import { ISpotifyUser } from '../../api/models/spotify';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'pm-spotify-home',
    templateUrl: './spotify-home.component.html',
    styleUrls: ['./spotify-home.component.scss']
})
export class SpotifyHomeComponent implements OnInit {
    public currentUser$;
    public playlists$: Observable<IHttpAsyncItem<any>>;
    public hasAppErrorMessage: string;

    constructor (
        private _spotifyService: SpotifyService,
        private _spotifyAuthService: SpotifyAuthService,
        private _snackBar: MatSnackBar
    ) { }

    public ngOnInit () {
        // If window.chrome.identity is missing, then it hasn't been correctly requested from the manifest.json
        // We've seen this when:
        // - Crashing auth stuff during dev (fix = restart Chrome)
        // - Switching branches/versions of the plugin. (Load version without 'identity', then switch to this one needing it)
        // --- Fix: Increment version number w/deploy, or maybe restart Chrome.
        if (this.isRunningAsChromeExtension()
            && !window.chrome.identity) {

            this.hasAppErrorMessage = 'Error loading \'chrome auth stuff\' - soz! Please try reloading Chrome, or contact us to say it\'s stuffed.';
        }

        this.currentUser$ = this._spotifyAuthService.isLoggedIn$.pipe(
                switchMap(isLoggedIn => {
                    if (isLoggedIn) {
                        return this._spotifyService.getCurrentUser().pipe(
                            map(user => ({ isLoading: false, result: user })),
                            startWith({ isLoading: true }),
                            catchError(err => {
                              this._snackBar.open('Error with auth - logging out, soz', null, { duration: 3000 });
                              this._spotifyAuthService.clearAuthToken();
                              return { isLoading: false };
                            })
                        );
                    }

                    return Observable.of(<IHttpAsyncItem<ISpotifyUser>>{ isLoading: false });
                })
            );

        this.playlists$ = this._spotifyAuthService.isLoggedIn$.pipe(
            filter(Boolean),
            switchMap(() => this._spotifyService.getCurrentUserPlaylists()),
            map(result => ({ isLoading: false, result: result })),
            startWith({ isLoading: true, result: null })
        );
    }

    public login () {
        this._spotifyAuthService.login().pipe(take(1))
            .subscribe(token => {
                // nothing to do
            }, error => {
                console.log(error);
            });
    }

    public logout () {
        this._spotifyAuthService.clearAuthToken();
    }

    public isRunningAsChromeExtension () {
        return document.location.protocol.indexOf('chrome') >= 0;
    }

    public clearAuth () {
      this._spotifyAuthService.clearAuthToken();
    }
}
