import { LikesComponent } from './likes/likes.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { QueueComponent } from './queue/queue.component';
import { HistoryComponent } from './history/history.component';
import { PlaylistComponent } from 'app/spotify/playlist/playlist.component';
import { SpotifyRecentlyPlayedComponent } from './spotify/spotify-recently-played/spotify-recently-played.component';
import { SpotifyTopTracksComponent } from './spotify/spotify-top-tracks/spotify-top-tracks.component';
import { SpotifyTrackDetailComponent } from './spotify/spotify-track-detail/spotify-track-detail.component';
import { SpotifyRecommendationsComponent } from './spotify/spotify-recommendations/spotify-recommendations.component';

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
    { path: 'likes', component: LikesComponent, data: { opaqueHeader: true } },

    // TODO: Proper child router:
    { path: 'spotify/playlist/:user/:id', component: PlaylistComponent },
    { path: 'spotify/recommendations/:trackId', component: SpotifyRecommendationsComponent },
    { path: 'spotify/recently-played', component: SpotifyRecentlyPlayedComponent },
    { path: 'spotify/top-tracks', component: SpotifyTopTracksComponent },
    { path: 'spotify/track-detail/:artistId/:trackId', component: SpotifyTrackDetailComponent }



];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
