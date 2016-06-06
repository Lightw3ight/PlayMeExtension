import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {IArtist} from '../models/IArtist'

@Injectable()
export class ArtistService {
	constructor(private _http: Http) {
	}

	getArtist(id: string, provider: string) : Promise<IArtist> {
		var url = `http://music.trademe.local/sst/2/api/browse/artist/${provider}/${id}`;

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