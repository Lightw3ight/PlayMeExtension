import {Injectable} from '@angular/core';

export interface IAudioZone {
	name: string,
	path?: string
}

@Injectable()
export class AudioZoneService {
	private zoneKey = 'currentAudioZone';
	private _zones: IAudioZone[] = [
		{ name: 'Bullnose', path: 'http://music.trademe.local/Bullnose' },
		{ name: 'OML L3', path: 'http://music.trademe.local/oml/3' },
		{ name: 'OML L4', path: 'http://music.trademe.local/oml/4' },
		{ name: 'OML L5', path: 'http://music.trademe.local/oml/5' },
		{ name: 'NZX L4', path: 'http://music.trademe.local/nzx/4' },
		{ name: 'Auckland L1', path: 'http://music.trademe.local/sst/1' },
		{ name: 'Auckland L2', path: 'http://music.trademe.local/sst/2' },
		{name: 'Christchurch', path: 'http://chc-music.trademe.local'}
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
		let zone = localStorage.getItem(this.zoneKey) || this._zones[0].path;
		if (!zone.startsWith('http')){
			zone = this._zones.find(z => z.name.indexOf(<any>zone) > 0).name;
		}

		return zone || this._zones[0].path;
	}
}
