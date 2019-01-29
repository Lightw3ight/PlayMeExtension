import { Observable } from 'rxjs/Rx';
import { ISavedTrack } from './saved-track.interface';
import { ILike } from './like.interface';
import { IVeto } from './veto.interface';

export interface IQueuedTrack extends ISavedTrack {
    Excluded: boolean;
    Id: string;
    IsDeleted: boolean;
    IsPaused: boolean;
    IsSkipped: boolean;
    LikeCount: number;
    Likes: ILike[];
    PausedDurationAsMilliseconds: number;
    Reason: string;
    StartedPlayingDateTime: Date;
    User: string;
    VetoCount: number;
    Vetoes: IVeto[];

    // Not 100% sure this exists
    url: string;

    fullName: Observable<string>;
    userId: string;
    userPhotoUrl: string;
}
