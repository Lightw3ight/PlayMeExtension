import {ITrack} from './ITrack';
import {IAlbum} from './IAlbum';
import {IPlayMeObject} from './IPlayMeObject';
import {LoadedState} from './LoadedState';

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
