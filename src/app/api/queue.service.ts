import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { ITrack } from '../models/ITrack';
import * as moment from 'moment';
import { AudioZoneService } from './audio-zone.service';
import { IQueuedTrack, IPagedResult } from '../models';
import { UserInfoService } from './user-info.service';


@Injectable()
export class QueueService {
    constructor (
        private _http: HttpClient,
        private _audioZoneService: AudioZoneService,
        private _userInfoService: UserInfoService
    ) { }

    public getMyHistory (): Observable<IPagedResult<IQueuedTrack>> {
        return this.getHistory('mine');
    }

    public getRequestedHistory (): Observable<IPagedResult<IQueuedTrack>> {
        return this.getHistory('requested');
    }

    public getHistory (type: string = 'all'): Observable<IPagedResult<IQueuedTrack>> {
        const url = `${this._audioZoneService.getCurrentZoneSnapshot().path}/api/history?filter=${type}&start=0&take=50`;

        return this._http.get<IPagedResult<IQueuedTrack>>(url).pipe(
                map(results => {
                    results.PageData.forEach(this.parseQueuedTrack);
                    return results;
                }));
            // .catch(this.handleError);
    }

    public getAllQueuedTracks (): Observable<IQueuedTrack[]> {
        const url = `${this._audioZoneService.getCurrentZoneSnapshot().path}/api/Queue`;

        return this._http.get<IQueuedTrack[]>(url).pipe(
            map(results => {
                // const results = (<IQueuedTrack[]>response.json());
                results.forEach(this.parseQueuedTrack);
                return results;
            }));
            // .catch(this.handleError);
    }

    public queueTrack (track: ITrack, comment: string = null): void {
        const url = `${this._audioZoneService.getCurrentZoneSnapshot().path}/api/Queue/Enqueue/${track.MusicProvider.Identifier}/${track.Link}`;

        if (track.IsAlreadyQueued) {
            return;
        }

        track.Reason = comment;
        const data = {
            id: encodeURIComponent(track.Link),
            provider: track.MusicProvider.Identifier,
            reason: track.Reason
        };

        // const options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });

        this._http.post(url, JSON.stringify(data), {
                headers: new HttpHeaders().set('Content-Type', 'application/json')
            })
            .take(1)
            .subscribe(() => {
                track.IsAlreadyQueued = true;
            });
    }

    public parseQueuedTrack = (queueItem: IQueuedTrack) => {
        queueItem.StartedPlayingDateTime = queueItem.StartedPlayingDateTime ? moment(queueItem.StartedPlayingDateTime).toDate() : null;
        queueItem.fullName = this._userInfoService.getUserFullName(queueItem.User);
        queueItem.userId = this._userInfoService.parseUserId(queueItem.User);
        queueItem.url = queueItem['userId'] ? `http://guesswho/#${queueItem['userId']}` : null;
        queueItem.userPhotoUrl = queueItem['userId'] ? `http://guesswho/StaffPhoto.ashx?userId=${queueItem['userId']}` : null;

        queueItem.Likes.forEach(l => {
            const uid = this._userInfoService.parseUserId(l.ByUser);
            l.url = uid ? `http://guesswho/#${uid}` : null;
            l.fullName = this._userInfoService.getUserFullName(l.ByUser);
            l.userPhotoUrl = uid ? `http://guesswho/StaffPhoto.ashx?userId=${uid}` : null;
        });

        queueItem.Vetoes.forEach(l => {
            const uid = this._userInfoService.parseUserId(l.ByUser);
            l.url = uid ? `http://guesswho/#${uid}` : null;
            l.fullName = this._userInfoService.getUserFullName(l.ByUser);
            l.userPhotoUrl = uid ? `http://guesswho/StaffPhoto.ashx?userId=${uid}` : null;
        });
        return queueItem;
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
