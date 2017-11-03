import { IArtist } from './IArtist';
import { ITrack } from './ITrack';
import { IPlayMeObject } from './IPlayMeObject';

export interface IAlbum extends IPlayMeObject {
    Artist: IArtist;
    Year: number;
    ArtworkId: string;
    Tracks: ITrack[];
    IsAvailable: boolean;
    ArtworkUrlLarge: string;
    ArtworkUrlMedium: string;
    ArtworkUrlSmall: string;
}
