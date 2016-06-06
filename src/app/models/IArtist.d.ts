import {ITrack} from './ITrack';
import {IAlbum} from './IAlbum';
import {IPlayMeObject} from './IPlayMeObject';

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

export enum LoadedState{
	Basic = 0,
	FullNoTracks = 1,
	FullWithTracks = 2
}