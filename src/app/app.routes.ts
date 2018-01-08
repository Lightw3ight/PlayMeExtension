import { LikesComponent } from './likes/likes.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { QueueComponent } from './queue/queue.component';
import { HistoryComponent } from './history/history.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/now-playing',
        pathMatch: 'full'
    },
    { path: 'now-playing', component: NowPlayingComponent, data: { isHome: true } },
    { path: 'album/:provider/:id', component: AlbumComponent },
    { path: 'search/:provider/:searchQuery', component: SearchComponent, data: { opaqueHeader: true, preserveSearch: true } },
    { path: 'artist/:provider/:id', component: ArtistComponent },
    { path: 'queue', component: QueueComponent, data: { opaqueHeader: true } },
    { path: 'history', component: HistoryComponent, data: { opaqueHeader: true } },
    { path: 'likes', component: LikesComponent, data: { opaqueHeader: true } }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
