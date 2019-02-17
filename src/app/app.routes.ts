import { LikesComponent } from './likes/likes.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { QueueComponent } from './queue/queue.component';
import { HistoryComponent } from './history/history.component';
import { PlaylistComponent } from 'app/spotify/playlist/playlist.component';
import { SpotifyHomeComponent } from './spotify/spotify-home/spotify-home.component';
import { ShortQueueComponent } from './now-playing/short-queue/short-queue.component';
import { ShortHistoryComponent } from './now-playing/short-history/short-history.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/now-playing',
        pathMatch: 'full'
    },
    { path: 'now-playing',
      component: NowPlayingComponent,
      data: { isHome: true } },
    { path: 'now-playing/queue',
      component: ShortQueueComponent,
      outlet: 'homeNav'
    },
    { path: 'now-playing/history',
      component: ShortHistoryComponent,
      outlet: 'homeNav'
    },
    { path: 'album/:provider/:id', component: AlbumComponent },
    { path: 'search/:provider/:searchQuery', component: SearchComponent, data: { opaqueHeader: true, preserveSearch: true } },
    { path: 'artist/:provider/:id', component: ArtistComponent },
    { path: 'queue', component: QueueComponent, data: { opaqueHeader: true } },
    { path: 'history', component: HistoryComponent, data: { opaqueHeader: true } },
    { path: 'likes', component: LikesComponent, data: { opaqueHeader: true } },

    { path: 'spotify',
      component: SpotifyHomeComponent,
      outlet: 'homeNav'
    },
    // TODO: Proper child router:
    { path: 'spotify/playlist/:user/:id', component: PlaylistComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
