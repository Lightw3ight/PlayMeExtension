import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes, Router, ROUTER_PROVIDERS } from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {Location} from '@angular/common';


 import {NowPlayingComponent} from './nowPlaying/nowPlayingComponent';
 import {ArtistDetailsComponent} from './artists/artistDetailsComponent';
 import {AlbumDetailsComponent} from './albums/albumDetailsComponent';
 import {SearchResultsComponent} from './search/searchResultsComponent';

 import {SearchService} from './services/searchService';
 import {ArtistService} from './services/artistService';
 import {AlbumService} from './services/albumService';
 import {QueueService} from './services/queueService';
 import {AudioZoneService} from './services/audioZoneService';
 import {UserInfoService} from './services/userInfoService';
 import {SignalRService} from './services/signalrService';
 
 
// import {GiphyService} from './services/giphyService';
// import {UrlTransformService} from './services/urlTransformService';
// import {SocketService} from './services/socketService';

@Component({
	selector: 'app-component',
	template: '<router-outlet></router-outlet>',
	directives: [ROUTER_DIRECTIVES],
	providers: [
		//ROUTER_PROVIDERS,
		HTTP_PROVIDERS,
		SearchService,
		ArtistService,
		AlbumService,
		QueueService,
		//Location,
		AudioZoneService,
		UserInfoService,
		SignalRService
	]
})
@Routes([
	{path: '/', component: NowPlayingComponent},
	{path: '/album/:provider/:id', component: AlbumDetailsComponent},
	{path: '/search/:provider/:searchQuery', component: SearchResultsComponent},
	{path: '/artist/:provider/:id', component: ArtistDetailsComponent}
])
export class AppComponent{
	constructor(private router: Router){
		
	}
	
	ngOnInit() {
		//this.router.navigate(['/popup']);
	}
}