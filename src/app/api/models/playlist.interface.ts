import { IPlayMeObject } from './play-me-object.interface';
import { ITrack } from './track.interface';

export interface IPlaylist extends IPlayMeObject {
    Description: string;
    Href: string;
    ImageUrls: string[];
    Tracks: ITrack[];
    TrackCount: number;
    OwnerId: string;
}
