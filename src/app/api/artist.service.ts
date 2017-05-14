import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IArtist } from '../models/IArtist';
import { AudioZoneService } from './audio-zone.service';

@Injectable()
export class ArtistService {
    constructor(private _http: Http, private _audioZoneService: AudioZoneService) {
    }

    getArtist(id: string, provider: string): Observable<IArtist> {
        const url = `${this._audioZoneService.getCurrentZoneSnapshot().path}/api/browse/artist/${provider}/${id}`;
        const result = this._http.get(url);

        return result
            .map(response => {
                return <IArtist>response.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
