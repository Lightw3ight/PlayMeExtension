import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ISpotifyConfig, ISpotifyUser, ISpotifyPlaylist, ISpotifyOptions, ISpotifyPlaylistsResult, ISpotifyTrack, ISpotifyArtist, ISpotifyAlbum } from './models/spotify';
import { ITrack, IArtist, IAlbum, IPlaylist } from './models';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {
    constructor (
        @Inject('SpotifyConfig') private config: ISpotifyConfig,
        private _http: HttpClient
    ) {
        config.apiBase = 'https://api.spotify.com/v1';
    }

    public getCurrentUser (): Observable<ISpotifyUser> {
        return this.apiGet<ISpotifyUser>('/me');
    }

    public getPlaylist (userId: string, playlistId: string, options?: { fields: string }): Observable<IPlaylist> {
        const url = `/users/${userId}/playlists/${playlistId}`;
        return this.apiGet<ISpotifyPlaylist>(url, options).pipe(
            map(result => this.mapPlaylist(result))
        );
    }

    getCurrentUserPlaylists (options?: ISpotifyOptions): Observable<IPlaylist[]> {
        const url = `/me/playlists/`;
        return this.apiGet<ISpotifyPlaylistsResult>(url, options).pipe(
            map(result => {
                return result.items.map(pl => this.mapPlaylist(pl));
            })
        );
    }

    private apiGet<T> (url: string, options?: { [key: string]: any | any[] }): Observable<T> {
        return this._http.get<T>(this.config.apiBase + url, {
            headers: this.getHeaders(),
            params: this.toApiOptions(options)
        });
    }

    private apiPost (url: string, body: any, options?: { [key: string]: any | any[] }) {
        this._http.post(this.config.apiBase + url, body, {
            headers: this.getHeaders(true),
            params: this.toApiOptions(options)
        });
    }

    private getHeaders (isJson?: boolean): HttpHeaders {
        let auth = new HttpHeaders({
            'Authorization': `Bearer ${this.config.getUserAuthToken()}`
        });

        if (isJson) {
            auth = auth.append('Content-Type', 'application/json');
        }
        return auth;
    }

    private toApiOptions (options: Object): { [key: string]: string | string[] } {
        if (!options) {
            return null;
        }

        const apiOptions: { [key: string]: string | string[] } = {};

        Object.keys(options).forEach(key => {
            const val = options[key];
            if (val !== null && val !== undefined) {
                if (Array.isArray(val)) {
                    apiOptions[key] = val.map(v => v.toString());
                } else {
                    apiOptions[key] = val.toString();
                }
            }
        });

        return apiOptions;
    }

    private mapPlaylist (playlist: ISpotifyPlaylist): IPlaylist {
        return <IPlaylist> {
            Link: playlist.id,
            Name: playlist.name,
            Description: playlist.description,
            ImageUrls: playlist.images.map(i => i.url),
            Tracks: (playlist.tracks.items || []).map(t => this.mapTrack(t.track)),
            TrackCount: playlist.tracks.total,
            OwnerId: playlist.owner.id
        };
    }

    private mapTrack (track: ISpotifyTrack): ITrack {
        return <ITrack> {
            Name: track.name,
            Link: track.id,
            Duration: this.msToTime(track.duration_ms),
            Album: this.mapAlbum(track.album),
            Artists: track.artists.map(a => this.mapArtist(a)),
            MusicProvider: { Identifier: 'sp' }
        };
    }

    private mapArtist (artist: ISpotifyArtist): IArtist {
        return <IArtist> {
            Name: artist.name,
            Link: artist.id,
            MusicProvider: { Identifier: 'sp' }
        };
    }

    private mapAlbum (album: ISpotifyAlbum): IAlbum {
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
        const h = duration / (1000 * 60 * 60);
        const hours = Math.floor(h);

        const m = (h - hours) * 60;
        const minutes = Math.floor(m);

        const seconds = Math.floor((m - minutes) * 60);

        return hours ? `${this.padNumber(hours)}:${this.padNumber(minutes)}:${this.padNumber(seconds)}` : `${this.padNumber(minutes)}:${this.padNumber(seconds)}`;
    }

    private padNumber (num: number) {
        return (num < 10) ? '0' + num : num;
    }
}
