import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router, ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';
//import {SearchService} from '../services/SearchService';
//import {IQueuedTrack} from '../models/IQueuedTrack';
import {ArtistService} from '../services/artistService';
import {IArtist} from '../models/IArtist';

import {SearchBarComponent} from '../search/searchBarComponent';
import {AlbumListItemComponent} from '../albums/albumListItemComponent'
import {ZoneSelectorComponent} from '../nowPlaying/zoneSelectorComponent';
import {BreadcrumbsComponent} from '../search/breadcrumbsComponent';



@Component({
	selector: 'artist-details',
	templateUrl: '/app/artists/artistDetailsComponent.html',
	directives: [
		ROUTER_DIRECTIVES,
		SearchBarComponent,
		AlbumListItemComponent,
		ZoneSelectorComponent,
		BreadcrumbsComponent
	]
})
export class ArtistDetailsComponent implements OnInit {
	artistId: string;
	provider: string;
	artist: IArtist;
	constructor(private _routeSegment: RouteSegment, private _artistService: ArtistService, private _location: Location){
		
	}
	
	ngOnInit(){
		this.artistId = this._routeSegment.getParam('id');
		this.provider = this._routeSegment.getParam('provider');
		
		this._artistService.getArtist(this.artistId, this.provider).then((artist: IArtist) =>{
			this.artist = artist;
		});
	}
	
	back(){
		this._location.back();
	}
}