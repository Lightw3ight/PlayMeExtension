import { SpotifyAlbumModel } from './spotify-album.model';
import { SpotifyArtistModel } from './spotify-artist.model';

export class SpotifyTrackModel {
    id: string;
    album: SpotifyAlbumModel;
    artists: SpotifyArtistModel[];
    duration_ms: number;
    name: string;
    popularity: number;
}
