import {Component, Input} from '@angular/core';
import {Router, ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';
import {IArtist} from '../models/IArtist.d'

@Component({
	selector: 'artist-list-item',
	templateUrl: '/app/artists/artistListItemComponent.html',
	directives:[
		ROUTER_DIRECTIVES
	]
})
export class ArtistListItemComponent{
	@Input() artist: IArtist
}