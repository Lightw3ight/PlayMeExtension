import { SpotifyPlaylistModel } from './spotify-playlist.model';

export class SpotifyPlaylistsResult {
    href: string;
    items: SpotifyPlaylistModel[];
    limit: number;
    offset: 0;
    total: number;
}
