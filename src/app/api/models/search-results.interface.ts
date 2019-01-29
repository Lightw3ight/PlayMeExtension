import {IAlbumPagedList} from './album-paged-list.interface';
import {IArtistPagedList} from './artist-paged-list.interface';
import {ITrackPagedList} from './track-paged-list.interface';

export interface ISearchResults {
    DidYouMean?: string;
    PagedArtists?: IArtistPagedList;
    PagedAlbums?: IAlbumPagedList;
    PagedTracks?: ITrackPagedList;
}
