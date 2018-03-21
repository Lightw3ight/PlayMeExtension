import { SpotifyUserService } from './../spotify-user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SpotifyService, SpotifyAuthService } from '../../api';
import { map, startWith, take } from 'rxjs/operators';

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
        private _spotifyUserService: SpotifyUserService,
        private _spotifyAuthService: SpotifyAuthService
    ) { }

    ngOnInit () {

        // If window.chrome.identity is missing, then it hasn't been correctly requested from the manifest.json
        // We've seen this when:
        // - Crashing auth stuff during dev (fix = restart Chrome)
        // - Switching branches/versions of the plugin. (Load version without 'identity', then switch to this one needing it)
        // --- Fix: Increment version number w/deploy, or maybe restart Chrome.
        if (this.isRunningAsChromeExtension()
            && !window.chrome.identity) {

            this.hasAppErrorMessage = 'Error loading \'chrome auth stuff\' - soz! Please try reloading Chrome, or contact us to say it\'s stuffed.';
        }

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
        this.playlists$ = this._spotifyService.getCurrentUserPlaylists().pipe(
            map(result => ({
                isLoading: false,
                result: result
            })),
            startWith({
                isLoading: true,
                result: null
            })
        );
    }

    login () {

        if (this.isRunningAsChromeExtension()) {
            this._spotifyUserService.loginForChromeExtension();
        } else {
            // TODO: Some useful error handling?
            this._spotifyAuthService.login().pipe(take(1)).subscribe(token => {
                // nothing to do
            }, error => {
                console.log(error);
            });
        }

    }

    logout () {
        this._spotifyUserService.clearAuthToken();
    }

    isRunningAsChromeExtension () {
        return document.location.protocol.indexOf('chrome') >= 0;
    }

}
