import { routeAnimation } from './../router-animation';
import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ArtistService } from '../api';
import { IArtist } from '../api/models';
import { Observable } from 'rxjs/Observable';
import { catchError, switchMap } from 'rxjs/operators';

@Component({
    selector: 'pm-artist',
    templateUrl: 'artist.component.html',
    styleUrls: ['artist.component.scss'],
    animations: [routeAnimation]
})
export class ArtistComponent implements OnInit {
    @HostBinding('@routerTransition') animate = true;
    public artist: IArtist;
    public artist$: Observable<IArtist>;
    public paramsSubscription: Subscription;

    constructor (
        private _route: ActivatedRoute,
        private _artistService: ArtistService,
        private _location: Location
    ) { }

    public ngOnInit () {
        this.artist$ = this._route.paramMap.pipe(
            switchMap(params => this._artistService.getArtist(params.get('id'), params.get('provider'))),
            catchError(error => {
                alert('Error loading artist');
                this._location.back();
                return Observable.of(error);
            }));
    }

    public back () {
        this._location.back();
    }

    public trackByFn (index: number, artist: IArtist) {
        return index;
    }
}
