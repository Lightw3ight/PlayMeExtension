import { IPlayMeObject } from './IPlayMeObject';
import { ITrack } from './ITrack';

export interface IPlaylist extends IPlayMeObject {
    Description: string;
    Href: string;
    ImageUrls: string[];
    Tracks: ITrack[];
    TrackCount: number;
    OwnerId: string;
}
