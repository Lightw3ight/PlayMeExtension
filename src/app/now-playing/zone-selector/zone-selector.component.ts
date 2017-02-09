import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { AudioZoneService, IAudioZone } from '../../api';

@Component({
    selector: 'zone-selector',
    templateUrl: 'zone-selector.component.html',
    styleUrls: ['zone-selector.component.css']
})
export class ZoneSelectorComponent implements OnInit {
    @Input() activeZone: string;
    @Output() zoneChanged = new EventEmitter<string>();
    zones: IAudioZone[] = [];
    selectedZone: string;

    constructor(private _audioZoneService: AudioZoneService) {

    }

    getZoneName(zonePath: string) {
        let zone = this.zones.find((z: IAudioZone) => z.path === zonePath);
        return zone ? zone.name : null;
    }

    changeZone(zone) {
        this._audioZoneService.setCurrentZone(zone);
        this.activeZone = zone;
        this.zoneChanged.emit(zone);

        return false;
    }

    ngOnInit() {
        this.activeZone = this._audioZoneService.getCurrentZone();
        this._audioZoneService.getAllZones().then((zones: IAudioZone[]) => {
            this.zones = zones;

            if (!this.activeZone) {
                this.changeZone(this.zones[0].path);
            }
        });
    }
}