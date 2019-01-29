import { ISpotifyTrackItem } from './spotify-track-item.interface';
import { ISpotifyImage } from './spotify-image.interface';

export interface ISpotifyPlaylist {
    collaborative: boolean;
    description: string;
    external_urls: any;
    followers: {
        href: string,
        total: number
    };
    href: string;
    id: string;
    images: ISpotifyImage[];
    name: string;
    public: false;
    tracks: { items: ISpotifyTrackItem[], total: number };
    owner: { id: string };
}
