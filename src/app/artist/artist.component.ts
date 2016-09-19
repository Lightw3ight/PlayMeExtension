import {Component, OnInit, OnDestroy} from '@angular/core';
import {Location} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import {ArtistService} from '../api';
import {IArtist} from '../models';

@Component({
	selector: 'artist',
	templateUrl: 'artist.component.html',
	styleUrls: ['artist.component.css']
})
export class ArtistComponent implements OnInit {
	artistId: string;
	provider: string;
	artist: IArtist;
	constructor(private _route: ActivatedRoute, private _artistService: ArtistService, private _location: Location) {

	}

	ngOnInit() {
		this.artistId = this._route.snapshot.params['id'];
		this.provider = this._route.snapshot.params['provider'];

		this._artistService.getArtist(this.artistId, this.provider).then((artist: IArtist) => {
			this.artist = artist;
		})
		.catch(() => {
			alert('Error loading artist');
			this._location.back();
		});
	}

	back() {
		this._location.back();
	}
}