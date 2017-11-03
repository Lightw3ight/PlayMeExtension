import {IAlbum} from './IAlbum';
import {IArtist} from './IArtist';
import {IPlayMeObject} from './IPlayMeObject';

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
}
