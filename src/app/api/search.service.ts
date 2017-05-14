import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ISearchResults } from '../models';
import { AudioZoneService } from './audio-zone.service';

@Injectable()
export class SearchService {
    constructor(private _http: Http, private _audioZoneService: AudioZoneService) {
    }

    search(provider, query): Observable<ISearchResults> {
        const url = `${this._audioZoneService.getCurrentZoneSnapshot().path}/api/search?provider=${provider}&searchTerm=${query}`;
        const result = this._http.get(url);

        return result
            .map(response => {
                return <ISearchResults>response.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
