import { routeAnimation } from './../router-animation';
import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ArtistService } from '../api';
import { IArtist } from '../models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

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

    ngOnInit() {
        this.artist$ = this._route.params
            .switchMap(params => this._artistService.getArtist(params['id'], params['provider']))
            .catch(error => {
                alert('Error loading artist');
                this._location.back();
                return Observable.of(error);
            });
    }

    back() {
        this._location.back();
    }
}
