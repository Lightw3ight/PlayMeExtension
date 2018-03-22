import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { switchMap, map, startWith, filter, shareReplay } from 'rxjs/operators';
import { ITrack, IAlbum, IArtist, IPlaylist } from '../../api/models';
import { SpotifyService } from '../../api/spotify.service';

@Component({
    selector: 'pm-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

    public playlist$: Observable<IHttpAsyncItem<IPlaylist>>;
    public tracks$: Observable<ITrack[]>;
    public playlistUrl$: Observable<string>;

    constructor (
        private _route: ActivatedRoute,
        private _spotifyService: SpotifyService
    ) { }

    ngOnInit () {
        this.playlist$ = this._route.paramMap.pipe(
            map(paramMap => ({ playlistId: paramMap.get('id'), playlistOwnerId: paramMap.get('user') })),
            switchMap(params =>
                this._spotifyService.getPlaylist(params.playlistOwnerId, params.playlistId)
            ),
            map(playlist => ({
                isLoading: false,
                result: playlist
            })),
            startWith({
                isLoading: true,
                result: null
            }),
            shareReplay()
        );

        this.tracks$ = this.playlist$.pipe(
            filter(o => !o.isLoading && !!o.result),
            map(o => o.result.Tracks)
        );

        this.playlistUrl$ = this.playlist$.pipe(
            filter(o => !o.isLoading && !!o.result),
            map(o => o.result),
            map(playlist => playlist.ImageUrls.length ? playlist.ImageUrls[0] : '')
        );
    }
}
