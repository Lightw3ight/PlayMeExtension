import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { IAlbum } from '../models/IAlbum';
import { AudioZoneService } from './audio-zone.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlbumService {
    constructor(
        private _http: HttpClient,
        private _audioZoneService: AudioZoneService) {
    }

    getAlbum(id: string, provider: string): Observable<IAlbum> {
        const url = `${this._audioZoneService.getCurrentZoneSnapshot().path}/api/browse/album/${provider}/${id}`;
        return this._http.get<IAlbum>(url);
    }
}
