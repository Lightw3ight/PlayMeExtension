import { ISpotifyImage } from './spotify-image.interface';

export interface ISpotifyUser {
    country: string;
    display_name: string;
    href: string;
    id: string;
    images: ISpotifyImage[];
    product: string;
    type: string;
    uri: string;
    followers: any[];
    external_urls: any[];
}
