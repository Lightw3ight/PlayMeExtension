import {Component, OnInit} from '@angular/core';
import {Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

import {AlbumService, QueueService} from '../api';
import {IAlbum, ITrack} from '../models';

@Component({
	moduleId: module.id,
	selector: 'album',
	templateUrl: 'album.component.html',
	styleUrls: ['album.component.css']
})
export class AlbumComponent implements OnInit {
	artistId: string;
	provider: string;
	album: IAlbum;
	backgroundColor: '#FFF';
	foregroundColor: '#FFF';
	constructor(private _route: ActivatedRoute, private _albumService: AlbumService, private _queueService: QueueService, private _location: Location) {

	}
	ngOnInit() {
		this._route.params.subscribe(params => {
			var id = params['id'];
			var provider = params['provider'];

			this._albumService.getAlbum(id, provider).then((album: IAlbum) => {
				this.album = album;
			})
			.catch(() => {
				alert('Error loading artist');
				this._location.back();
			});
		});
	}

	queueTrack(track: ITrack) {
		this._queueService.queueTrack(track);
	}
}