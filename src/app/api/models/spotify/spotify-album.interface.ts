import { ISpotifyImage } from './spotify-image.interface';

export interface ISpotifyAlbum {
    id: string;
    name: string;
    images: ISpotifyImage[];
    href: string;
}
