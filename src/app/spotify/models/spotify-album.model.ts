import { SpotifyImageModel } from './spotify-image.model';

export class SpotifyAlbumModel {
    id: string;
    name: string;
    images: SpotifyImageModel[];
    href: string;
}
