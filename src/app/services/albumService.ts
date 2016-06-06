import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {IAlbum} from '../models/IAlbum'

@Injectable()
export class AlbumService {
	constructor(private _http: Http) {
	}

	getAlbum(id: string, provider: string) : Promise<IAlbum> {
		var url = `http://music.trademe.local/sst/2/api/browse/album/${provider}/${id}`;

		var result =this._http.get(url);
		return result
			.map(response => {
				return <IAlbum>response.json()
			})
			.toPromise()
			.catch(this.handleError);
	}
	
	private handleError(error: Response){
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}