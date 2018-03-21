import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { SpotifyService } from 'app/spotify/spotify.service';
import { Observable } from 'rxjs/Observable';
import { switchMap, map, startWith, filter } from 'rxjs/operators';
import { SpotifyPlaylistModel } from '../models/spotify-playlist.model';
import { ITrack, IAlbum, IArtist } from '../../models';
import { SpotifyTrackModel } from '../models/spotify-track.model';
import { SpotifyAlbumModel } from '../models/spotify-album.model';
import { SpotifyArtistModel } from '../models/spotify-artist.model';

@Component({
    selector: 'pm-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

    public playlist$: Observable<IHttpAsyncItem<SpotifyPlaylistModel>>;
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
            })
        );

        this.tracks$ = this.playlist$.pipe(
            filter(o => !o.isLoading && !!o.result),
            map(o => o.result.tracks),
            map(tracks => tracks.items.map(trackItem => this.mapTrack(trackItem.track)))
        );

        this.playlistUrl$ = this.playlist$.pipe(
            filter(o => !o.isLoading && !!o.result),
            map(o => o.result),
            map(playlist => playlist.images.length ? playlist.images[0].url : '')
        );
    }

    private mapTrack (track: SpotifyTrackModel): ITrack {
        return <ITrack> {
            Name: track.name,
            Link: track.id,
            Duration: this.msToTime(track.duration_ms),
            Album: this.mapAlbum(track.album),
            Artists: track.artists.map(a => this.mapArtist(a)),
            MusicProvider: { Identifier: 'sp' }
        };
    }

    private mapArtist (artist: SpotifyArtistModel): IArtist {
        return <IArtist> {
            Name: artist.name,
            Link: artist.id,
            MusicProvider: { Identifier: 'sp' }
        };
    }

    private mapAlbum (album: SpotifyAlbumModel): IAlbum {
        return <IAlbum> {
            Name: album.name,
            Link: album.id,
            ArtworkUrlSmall: album.images[0].url,
            ArtworkUrlMedium: album.images[0].url,
            ArtworkUrlLarge: album.images[0].url,
            MusicProvider: { Identifier: 'sp' }
        };
    }

    private msToTime (duration) {
        // let ms = (duration % 1000) / 100;
        const h = duration / (1000 * 60 * 60);
        const hours = Math.floor(h);

        const m = (h - hours) * 60;
        const minutes = Math.floor(m);

        const seconds = Math.floor((m - minutes) * 60);
        // const seconds = Math.floor(duration / 1000);
        // const minutes = Math.floor(duration / (1000 * 60));

        return hours ? `${this.padNumber(hours)}:${this.padNumber(minutes)}:${this.padNumber(seconds)}` : `${this.padNumber(minutes)}:${this.padNumber(seconds)}`;
    }

    private padNumber (num: number) {
        return (num < 10) ? '0' + num : num;
    }
}
