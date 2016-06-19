import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router, ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';
import {ArtistService} from '../api';
import {IArtist} from '../models';

import {SearchBarComponent, BreadcrumbsComponent} from '../shared';
import {AlbumListItemComponent} from '../search/album-list-item'
import {ZoneSelectorComponent} from '../now-playing/zone-selector';

@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html',
  styleUrls: ['artist.component.css'],
	directives: [
		ROUTER_DIRECTIVES,
		SearchBarComponent,
		AlbumListItemComponent,
		ZoneSelectorComponent,
		BreadcrumbsComponent
	]
})
export class ArtistComponent implements OnInit {
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