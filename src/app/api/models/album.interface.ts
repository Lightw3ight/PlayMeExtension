import { IArtist } from './artist.interface';
import { ITrack } from './track.interface';
import { IPlayMeObject } from './play-me-object.interface';

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
