import { SpotifyImageModel } from './spotify-image.model';
import { SpotifyTrackItemModel } from './spotify-track-item.model';

export class SpotifyPlaylistModel {
    collaborative: boolean;
    description: string;
    external_urls: any;
    followers: {
        href: string,
        total: number
    };
    href: string;
    id: string;
    images: SpotifyImageModel[];
    name: string;
    public: false;
    tracks: { items: SpotifyTrackItemModel[], total: number };
}
