import {IArtist} from './IArtist';

export interface IArtistPagedList {
	Total: number;
	Artists?: IArtist[];
}
