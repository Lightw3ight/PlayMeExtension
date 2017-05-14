import { IAudioZone } from './../../api/IAudioZone';
import { Component, EventEmitter, Input, Output, OnInit, ViewEncapsulation } from '@angular/core';
import { AudioZoneService } from '../../api/audio-zone.service';

@Component({
    selector: 'pm-zone-selector',
    templateUrl: 'zone-selector.component.html',
    styleUrls: ['zone-selector.component.scss']
    //encapsulation: ViewEncapsulation.None
})
export class ZoneSelectorComponent implements OnInit {
    @Input() activeZone: IAudioZone;
    @Output() zoneChanged = new EventEmitter<string>();
    zones: IAudioZone[] = [];
    selectedZone: string;

    constructor(
        private _audioZoneService: AudioZoneService
        ) {
    }

    getZoneName(zonePath: string) {
        const zone = this.zones.find((z: IAudioZone) => z.path === zonePath);
        return zone ? zone.name : null;
    }

    changeZone(zone: IAudioZone) {
        this._audioZoneService.setCurrentZone(zone.path);
        this.zoneChanged.emit(zone.path);

        return false;
    }

    ngOnInit() {
        this.activeZone = this._audioZoneService.getCurrentZoneSnapshot();
        this._audioZoneService.getAllZones().subscribe((zones: IAudioZone[]) => {
            this.zones = zones.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1);
        });
    }
}
