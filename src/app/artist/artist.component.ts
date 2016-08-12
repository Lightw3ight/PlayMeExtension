import {Component, OnInit, OnDestroy} from '@angular/core';
import {Location} from '@angular/common';
import {Router, ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';
import {ArtistService} from '../api';
import {IArtist} from '../models';
import {Subscription} from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html',
  styleUrls: ['artist.component.css']
})
export class ArtistComponent implements OnInit, OnDestroy {
	artistId: string;
	provider: string;
	artist: IArtist;
	private paramsSubscription: Subscription;
	constructor(private _route: ActivatedRoute, private _artistService: ArtistService, private _location: Location){
		
	}
	
	ngOnInit(){
		this.paramsSubscription = this._route.params.subscribe(params =>{
			this.artistId = params['id'];
			this.provider = params['provider'];
			
			this._artistService.getArtist(this.artistId, this.provider).then((artist: IArtist) =>{
				this.artist = artist;
			})
			.catch(() =>{
				alert('Error loading artist');
				this._location.back();
			});
		});
	}

	ngOnDestroy(){
		this.paramsSubscription.unsubscribe();
	}
	
	back(){
		this._location.back();
	}
}