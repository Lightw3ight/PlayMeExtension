import {Component, OnInit} from '@angular/core';
import {Router, ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';
//import {SearchService} from '../services/SearchService';
//import {IQueuedTrack} from '../models/IQueuedTrack';
import {AlbumService} from '../services/albumService';
import {IAlbum} from '../models/IAlbum';
import {ITrack} from '../models/ITrack';
import {QueueService} from '../services/queueService';

import {SearchBarComponent} from '../search/searchBarComponent';
import {SimpleTrackListItemComponent} from '../tracks/simpleTrackListItemComponent';
import {BreadcrumbsComponent} from '../search/breadcrumbsComponent';
import {ZoneSelectorComponent} from '../nowPlaying/zoneSelectorComponent';



@Component({
	selector: 'artist-details',
	templateUrl: '/app/albums/albumDetailsComponent.html',
	directives: [
		ROUTER_DIRECTIVES,
		SearchBarComponent,
		SimpleTrackListItemComponent,
		BreadcrumbsComponent,
		ZoneSelectorComponent
	]
})
export class AlbumDetailsComponent implements OnInit {
	artistId: string;
	provider: string;
	album: IAlbum;
	backgroundColor: '#FFF';
	foregroundColor: '#FFF';
	constructor(private _routeSegment: RouteSegment, private _albumService: AlbumService, private _queueService: QueueService) {

	}
	ngOnInit() {
		var id = this._routeSegment.getParam('id');
		var provider = this._routeSegment.getParam('provider');

		this._albumService.getAlbum(id, provider).then((album: IAlbum) => {
			this.album = album;
		});
	}

	queueTrack(track: ITrack) {
		this._queueService.queueTrack(track);
	}
}