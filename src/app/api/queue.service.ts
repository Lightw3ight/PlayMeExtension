import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {ITrack} from '../models/ITrack';
import * as moment from 'moment';
import {AudioZoneService} from './audio-zone.service';
import {IQueuedTrack, IPagedResult} from '../models'
import {UserInfoService} from './user-info.service';


@Injectable()
export class QueueService {
	constructor(private _http: Http, private _audioZoneService: AudioZoneService, private _userInfoService: UserInfoService) {
	}

	getMyHistory(): Promise<IPagedResult<IQueuedTrack>>{
		return this.getHistory('mine');
	}

	getRequestedHistory(): Promise<IPagedResult<IQueuedTrack>>{
		return this.getHistory('requested');
	}

	getHistory(type: string = 'all'): Promise<IPagedResult<IQueuedTrack>>{
		var url = `http://music.trademe.local/${this._audioZoneService.getCurrentZone()}/api/history?filter=${type}&start=0&take=50`;

		return this._http.get(url)
			.map(response => {
				var results = (<IPagedResult<IQueuedTrack>>response.json());
				results.PageData.forEach(this.parseQueuedTrack);
				return results;
			})
			.toPromise()
			.catch(this.handleError);
	}

	getAllQueuedTracks(): Promise<IQueuedTrack[]>{
		var url = `http://music.trademe.local/${this._audioZoneService.getCurrentZone()}/api/Queue`;

		return this._http.get(url)
			.map(response => {
				var results = (<IQueuedTrack[]>response.json());
				results.forEach(this.parseQueuedTrack);
				return results;
			})
			.toPromise()
			.catch(this.handleError);
	}

	queueTrack(track: ITrack, comment: string = null) {
		var url = `http://music.trademe.local/${this._audioZoneService.getCurrentZone()}/api/Queue/Enqueue`;
		
		if (track.IsAlreadyQueued){
			return;
		}
		
		track.Reason = comment;
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

	parseQueuedTrack = (queueItem: IQueuedTrack) => {
		queueItem.StartedPlayingDateTime = queueItem.StartedPlayingDateTime ? moment(queueItem.StartedPlayingDateTime).toDate() : null;
		queueItem['fullName'] = this._userInfoService.getUserFullName(queueItem.User);
		queueItem['userId'] = this._userInfoService.parseUserId(queueItem.User);
		queueItem['url'] = queueItem['userId'] ? `http://guesswho/#${queueItem['userId']}` : null;
		queueItem['userPhotoUrl'] = queueItem['userId'] ? `http://guesswho/StaffPhoto.ashx?userId=${queueItem['userId']}` : null;

		queueItem.Likes.forEach(l => {
			var uid = this._userInfoService.parseUserId(l.ByUser)
			l['url'] = uid ? `http://guesswho/#${uid}` : null;
			l['fullName'] = this._userInfoService.getUserFullName(l.ByUser);
			l['userPhotoUrl'] = uid ? `http://guesswho/StaffPhoto.ashx?userId=${uid}` : null;

		})
		queueItem.Vetoes.forEach(l => {
			var uid = this._userInfoService.parseUserId(l.ByUser)
			l['url'] = uid ? `http://guesswho/#${uid}` : null;
			l['fullName'] = this._userInfoService.getUserFullName(l.ByUser);
			l['userPhotoUrl'] = uid ? `http://guesswho/StaffPhoto.ashx?userId=${uid}` : null;
		})
		return queueItem;
	}
	
	private handleError(error: Response){
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}