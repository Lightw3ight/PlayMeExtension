import {Injectable} from '@angular/core';

export interface IAudioZone {
	name: string,
	path: string
}

@Injectable()
export class AudioZoneService {
	private zoneKey = 'currentAudioZone';
	private _zones: IAudioZone[] = [
		{ name: 'Bullnose', path: 'Bullnose' },
		{ name: 'OML L3', path: 'oml/3' },
		{ name: 'OML L4', path: 'oml/4' },
		{ name: 'OML L5', path: 'oml/5' },
		{ name: 'Auckland L1', path: 'sst/1' },
		{ name: 'Auckland L2', path: 'sst/2' }
	]

	getAllZones(): Promise<IAudioZone[]> {
		return new Promise((resolve, reject) => {
			resolve(this._zones);
		});
	}
	
	setCurrentZone(zonePath){
		localStorage.setItem(this.zoneKey, zonePath);
	}
	
	getCurrentZone(){
		return localStorage.getItem(this.zoneKey) || this._zones[0].path;
	}
}