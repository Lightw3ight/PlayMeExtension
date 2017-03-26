import { ISavedTrack } from './ISavedTrack';
import { ILike } from './ILike';
import { IVeto } from './IVeto';

export interface IQueuedTrack extends ISavedTrack {
    Excluded: boolean;
    Id: string;
    IsDeleted: boolean;
    IsPaused: boolean;
    IsSkipped: boolean;
    LikeCount: number;
    Likes: ILike[]
    PausedDurationAsMilliseconds: number;
    Reason: string;
    StartedPlayingDateTime: Date;
    User: string;
    VetoCount: number;
    Vetoes: IVeto[];

    //Not 100% sure this exists
    url: any;
}
