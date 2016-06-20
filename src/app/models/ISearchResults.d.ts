import {IAlbumPagedList} from './IAlbumPagedList';
import {IArtistPagedList} from './IArtistPagedList';
import {ITrackPagedList} from './ITrackPagedList';

export interface ISearchResults {
	DidYouMean?: string;
	PagedArtists?: IArtistPagedList;
	PagedAlbums?: IAlbumPagedList;
	PagedTracks?: ITrackPagedList;
}
