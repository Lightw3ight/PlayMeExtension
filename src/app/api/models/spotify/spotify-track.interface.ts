import { ISpotifyAlbum } from './spotify-album.interface';
import { ISpotifyArtist } from './spotify-artist.interface';

export interface ISpotifyTrack {
    id: string;
    album: ISpotifyAlbum;
    artists: ISpotifyArtist[];
    duration_ms: number;
    name: string;
    popularity: number;
    preview_url: string;
}
