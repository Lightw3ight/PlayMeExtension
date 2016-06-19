import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {IArtist} from '../models/IArtist'
import {AudioZoneService} from './audio-zone.service';

@Injectable()
export class ArtistService {
	constructor(private _http: Http, private _audioZoneService: AudioZoneService) {
	}

	getArtist(id: string, provider: string) : Promise<IArtist> {
		var url = `http://music.trademe.local/${this._audioZoneService.getCurrentZone()}/api/browse/artist/${provider}/${id}`;

		var result =this._http.get(url);
		return result
			.map(response => {
				return <IArtist>response.json()
			})
			.toPromise()
			.catch(this.handleError);
	}
	
	private handleError(error: Response){
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}