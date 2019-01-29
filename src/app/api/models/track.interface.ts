import {IAlbum} from './album.interface';
import {IArtist} from './artist.interface';
import {IPlayMeObject} from './play-me-object.interface';

export interface ITrack extends IPlayMeObject {
    Artists: IArtist[];
    Album: IAlbum;
    Duration: string;
    DurationMilliseconds: number;
    IsAlreadyQueued: boolean;
    IsAvailable: boolean;
    Popularity: number;
    TrackArtworkUrl: string;
    Reason: string;
    AudioPreviewUrl?: string;
}
