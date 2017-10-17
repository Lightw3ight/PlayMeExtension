import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IArtist } from '../models/IArtist';
import { AudioZoneService } from './audio-zone.service';

@Injectable()
export class ArtistService {
    constructor(
        private _http: HttpClient,
        private _audioZoneService: AudioZoneService) {
    }

    getArtist(id: string, provider: string): Observable<IArtist> {
        const url = `${this._audioZoneService.getCurrentZoneSnapshot().path}/api/browse/artist/${provider}/${id}`;
        return this._http.get<IArtist>(url);
    }
}
