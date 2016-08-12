import { Routes, RouterModule } from '@angular/router';
import { NowPlayingComponent } from './now-playing';
import { AlbumComponent } from './album';
import { SearchComponent } from './search';
import { ArtistComponent } from './artist';
import { QueueComponent } from './queue';
import { HistoryComponent } from './history';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/now-playing',
		pathMatch: 'full'
	},
	{ path: 'now-playing', component: NowPlayingComponent },
	{ path: 'album/:provider/:id', component: AlbumComponent },
	{ path: 'search/:provider/:searchQuery', component: SearchComponent },
	{ path: 'artist/:provider/:id', component: ArtistComponent },
	{ path: 'queue', component: QueueComponent },
	{ path: 'history', component: HistoryComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
