import {Component, OnInit} from '@angular/core';
import {Router, ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';

import {AlbumService, QueueService} from '../api';
import {IAlbum, ITrack} from '../models';
import {SimpleTrackListItemComponent, BreadcrumbsComponent, SearchBarComponent} from '../shared';
import {ZoneSelectorComponent} from '../now-playing';

@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: 'album.component.html',
  styleUrls: ['album.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    SearchBarComponent,
    SimpleTrackListItemComponent,
    BreadcrumbsComponent,
    ZoneSelectorComponent
  ]
})
export class AlbumComponent implements OnInit {
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