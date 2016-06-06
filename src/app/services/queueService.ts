import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {ITrack} from '../models/ITrack';
import moment from 'moment';


@Injectable()
export class QueueService {
	constructor(private _http: Http) {
	}

	queueTrack(track: ITrack) {
		var url = `http://music.trademe.local/sst/2/api/Queue/Enqueue`;
		
		if (track.IsAlreadyQueued){
			return;
		}
		
		var data = {
			id: encodeURIComponent(track.Link),
			provider: track.MusicProvider.Identifier,
			reason: track.Reason
		}
		
		let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });
		
		this._http.post(url, JSON.stringify(data), options)
			 .map(response => {
			 	return response.json()
			 })
			.toPromise()
			.catch(this.handleError)
			.then(() =>{
				track.IsAlreadyQueued = true;
			});
	}
	
	private handleError(error: Response){
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}