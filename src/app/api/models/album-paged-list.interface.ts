import {IAlbum} from './album.interface';

export interface IAlbumPagedList {
    Total: number;
    Albums?: IAlbum[];
}
