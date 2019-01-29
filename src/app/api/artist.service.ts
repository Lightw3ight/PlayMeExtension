import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IArtist } from './models';
import { AudioZoneService } from './audio-zone.service';

@Injectable()
export class ArtistService {
    constructor (
        private _http: HttpClient,
        private _audioZoneService: AudioZoneService
    ) { }

    public getArtist (id: string, provider: string): Observable<IArtist> {
        const url = `${this._audioZoneService.getCurrentZoneSnapshot().path}/api/browse/artist/${provider}/${id}`;
        return this._http.get<IArtist>(url);
    }
}
