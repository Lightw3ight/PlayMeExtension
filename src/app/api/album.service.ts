import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { IAlbum } from '../models/IAlbum';
import { AudioZoneService } from './audio-zone.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlbumService {
    constructor(private _http: Http, private _audioZoneService: AudioZoneService) {
    }

    getAlbum(id: string, provider: string): Observable<IAlbum> {
        const url = `${this._audioZoneService.getCurrentZoneSnapshot().path}/api/browse/album/${provider}/${id}`;
        const result = this._http.get(url);

        return result
            .map(response => {
                return <IAlbum>response.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
