import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ISearchResults } from '../models';
import { AudioZoneService } from './audio-zone.service';

@Injectable()
export class SearchService {
    constructor (
        private _http: HttpClient,
        private _audioZoneService: AudioZoneService
    ) { }

    public search (provider, query): Observable<ISearchResults> {
        const url = `${this._audioZoneService.getCurrentZoneSnapshot().path}/api/search?provider=${provider}&searchTerm=${query}`;
        return this._http.get<ISearchResults>(url);
    }
}
