import {ITrack} from './track.interface';
import {IAlbum} from './album.interface';
import {IPlayMeObject} from './play-me-object.interface';
import {LoadedState} from './loaded-state.enum';

export interface IArtist extends IPlayMeObject {
    Profile: any;
    PortraitId: string;
    PortraitUrlLarge: string;
    PortraitUrlMedium: string;
    PortraitUrlSmall: string;
    Albums: IAlbum[];
    Tracks: ITrack[];
    LoadStatus: LoadedState;
}
