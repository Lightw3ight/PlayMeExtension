import { SpotifyImageModel } from './spotify-image.model';

export interface ISpotifyUser {
    country: string;
    display_name: string;
    href: string;
    id: string;
    images: SpotifyImageModel[];
    product: string;
    type: string;
    uri: string;
    followers: any[];
    external_urls: any[];
}
