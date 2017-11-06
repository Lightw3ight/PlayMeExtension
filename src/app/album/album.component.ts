import { catchError, switchMap } from 'rxjs/operators';
import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { AlbumService, QueueService } from '../api';
import { routeAnimation } from './../router-animation';
import { IAlbum, ITrack } from '../models';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'pm-album',
    templateUrl: 'album.component.html',
    styleUrls: ['album.component.scss'],
    animations: [routeAnimation]
})
export class AlbumComponent implements OnInit {
    @HostBinding('@routerTransition') animate = true;
    provider: string;
    public album$: Observable<IAlbum>;

    constructor(private _route: ActivatedRoute,
        private _albumService: AlbumService,
        private _queueService: QueueService,
        private _location: Location) {
    }

    ngOnInit() {
        this.album$ = this._route.paramMap.pipe(
            switchMap(params => this._albumService.getAlbum(params.get('id'), params.get('provider'))),
            catchError(error => {
                alert('Error loading album');
                this._location.back();
                return Observable.of(error);
            }));
    }

    queueTrack(track: ITrack) {
        this._queueService.queueTrack(track);
    }
}
