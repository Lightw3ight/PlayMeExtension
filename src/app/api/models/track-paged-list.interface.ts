import {ITrack} from './track.interface';

export interface ITrackPagedList {
    Total: number;
    Tracks?: ITrack[];
}
