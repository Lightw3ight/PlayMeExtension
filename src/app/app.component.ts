import { Component, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from './api/search.service';
import { ArtistService } from './api/artist.service';
import { AlbumService } from './api/album.service';
import { QueueService } from './api/queue.service';
import { AudioZoneService } from './api/audio-zone.service';
import { UserInfoService } from './api/user-info.service';
import { SignalRService } from './api/signalr.service';

@Component({
    selector: 'pm-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    constructor (
        private _signalRService: SignalRService,
        private _audioZoneService: AudioZoneService
    ) { }

    public ngOnInit () {
        this._audioZoneService.getCurrentZone()
            .subscribe(zone => {
                this._signalRService.initializeHub(zone.path);
            });
    }
}
