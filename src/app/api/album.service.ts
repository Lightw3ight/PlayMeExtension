import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAlbum } from './models';
import { AudioZoneService } from './audio-zone.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlbumService {
    constructor (
        private _http: HttpClient,
        private _audioZoneService: AudioZoneService
    ) { }

    public getAlbum (id: string, provider: string): Observable<IAlbum> {
        const url = `${this._audioZoneService.getCurrentZoneSnapshot().path}/api/browse/album/${provider}/${id}`;
        return this._http.get<IAlbum>(url);
    }
}
