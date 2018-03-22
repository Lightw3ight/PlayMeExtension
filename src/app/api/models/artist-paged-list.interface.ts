import {IArtist} from './artist.interface';

export interface IArtistPagedList {
    Total: number;
    Artists?: IArtist[];
}
