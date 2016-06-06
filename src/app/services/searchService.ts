import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {ISearchResults} from '../models/ISearchResults';

@Injectable()
export class SearchService {
	constructor(private _http: Http) {
	}

	search(provider, query) : Promise<ISearchResults> {
		var url = `http://music.trademe.local/sst/2/api/search?provider=${provider}&searchTerm=${query}`;

		var result =this._http.get(url);
		return result
			.map(response => {
				return <ISearchResults>response.json()
			})
			.toPromise()
			.catch(this.handleError);
	}
	
	private handleError(error: Response){
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}