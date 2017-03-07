import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AlbumService, QueueService } from '../api';
import { IAlbum, ITrack } from '../models';

@Component({
    selector: 'pm-album',
    templateUrl: 'album.component.html',
    styleUrls: ['album.component.scss']
})
export class AlbumComponent implements OnInit {
    artistId: string;
    provider: string;
    album: IAlbum;
    backgroundColor: '#FFF';
    foregroundColor: '#FFF';
    constructor(private _route: ActivatedRoute,
                private _albumService: AlbumService,
                private _queueService: QueueService,
                private _location: Location) {

    }
    ngOnInit() {
        const id = this._route.snapshot.params['id'];
        const provider = this._route.snapshot.params['provider'];

        this._albumService.getAlbum(id, provider).then((album: IAlbum) => {
                this.album = album;
            })
            .catch(() => {
                alert('Error loading artist');
                this._location.back();
            });
    }

    queueTrack(track: ITrack) {
        this._queueService.queueTrack(track);
    }
}
