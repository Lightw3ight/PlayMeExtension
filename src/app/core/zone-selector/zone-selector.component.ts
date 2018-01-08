import { IAudioZone } from './../../api';
import { Component, EventEmitter, Input, Output, OnInit, ViewEncapsulation } from '@angular/core';
import { AudioZoneService } from '../../api/audio-zone.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
    selector: 'pm-zone-selector',
    templateUrl: 'zone-selector.component.html',
    styleUrls: ['zone-selector.component.scss']
})
export class ZoneSelectorComponent implements OnInit {
    @Input() public activeZone: IAudioZone;
    @Output() public zoneChanged = new EventEmitter<string>();
    public zones$: Observable<IAudioZone[]>;
    public selectedZone: string;

    constructor (
        private _audioZoneService: AudioZoneService
    ) { }

    public changeZone (zone: IAudioZone) {
        this._audioZoneService.setCurrentZone(zone.path);
        this.zoneChanged.emit(zone.path);
    }

    public ngOnInit () {
        this.activeZone = this._audioZoneService.getCurrentZoneSnapshot();
        this.zones$ = this._audioZoneService.getAllZones();
    }
}
