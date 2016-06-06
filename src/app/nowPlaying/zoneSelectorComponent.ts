import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

import {AudioZoneService, IAudioZone} from '../services/audioZoneService';

@Component({
	selector: 'zone-selector',
	templateUrl: '/app/nowPlaying/zoneSelectorComponent.html',
	directives: [
		DROPDOWN_DIRECTIVES
	]
})
export class ZoneSelectorComponent implements OnInit{
	@Input() activeZone: string;
	@Output() zoneChanged = new EventEmitter<string>();
	zones: IAudioZone[] = [];
	selectedZone: string;
	
	constructor(private _audioZoneService: AudioZoneService){
		
	}
	
	getZoneName(zonePath){
		var zone = this.zones.find(z => z.path === zonePath);
		return zone ? zone.name : null;
	}
	
	changeZone(zone){
		this._audioZoneService.setCurrentZone(zone);
		this.activeZone = zone;
		this.zoneChanged.emit(zone);
	}
	
	ngOnInit(){
		this.activeZone = this._audioZoneService.getCurrentZone(); 
		this._audioZoneService.getAllZones().then(zones =>{
			this.zones = zones;
			
			if (!this.activeZone){
				this.changeZone(this.zones[0].path);
			}
		})
	}
}