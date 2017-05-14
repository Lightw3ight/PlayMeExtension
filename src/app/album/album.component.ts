import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { AlbumService, QueueService } from '../api';
import { routeAnimation } from './../router-animation';
import { IAlbum, ITrack } from '../models';

@Component({
    selector: 'pm-album',
    templateUrl: 'album.component.html',
    styleUrls: ['album.component.scss'],
    animations: [routeAnimation]
})
export class AlbumComponent implements OnInit {
    @HostBinding('@routerTransition') animate = true;
    provider: string;
    album: IAlbum;
    paramsSubscription: Subscription;

    constructor(private _route: ActivatedRoute,
        private _albumService: AlbumService,
        private _queueService: QueueService,
        private _location: Location) {
    }

    ngOnInit() {
        this._route.params
            .switchMap(params => this._albumService.getAlbum(params['id'], params['provider']))
            .subscribe((album) => {
                this.album = album;
            }, () => {
                alert('Error loading album');
                this._location.back();
            });
    }

    queueTrack(track: ITrack) {
        this._queueService.queueTrack(track);
    }
}
