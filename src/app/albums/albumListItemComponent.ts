import {Component, Input} from '@angular/core';
import {Router, ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';
import {IAlbum} from '../models/IAlbum.d'

@Component({
	selector: 'album-list-item',
	templateUrl: '/app/albums/albumListItemComponent.html',
	directives:[
		ROUTER_DIRECTIVES
	]
})
export class AlbumListItemComponent{
	@Input() album: IAlbum;
}