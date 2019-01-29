import { ISpotifyPlaylist } from './spotify-playlist.interface';

export interface ISpotifyPlaylistsResult {
    href: string;
    items: ISpotifyPlaylist[];
    limit: number;
    offset: 0;
    total: number;
}
