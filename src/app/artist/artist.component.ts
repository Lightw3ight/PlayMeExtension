import { routeAnimation } from './../router-animation';
import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ArtistService } from '../api';
import { IArtist } from '../models';

@Component({
    selector: 'pm-artist',
    templateUrl: 'artist.component.html',
    styleUrls: ['artist.component.scss'],
    animations: [routeAnimation]
})
export class ArtistComponent implements OnInit {
    @HostBinding('@routerTransition') animate = true;
    artist: IArtist;
    paramsSubscription: Subscription;

    constructor(private _route: ActivatedRoute, private _artistService: ArtistService, private _location: Location) {

    }

    ngOnInit() {
        this._route.params
            .switchMap(params => this._artistService.getArtist(params['id'], params['provider']))
            .subscribe((artist: IArtist) => {
                this.artist = artist;
            }, () => {
                alert('Error loading artist');
                this._location.back();
            });
    }

    back() {
        this._location.back();
    }
}
