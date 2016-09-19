import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { Router} from '@angular/router';



import {SearchService} from './api/search.service';
import {ArtistService} from './api/artist.service';
import {AlbumService} from './api/album.service';
import {QueueService} from './api/queue.service';
import {AudioZoneService} from './api/audio-zone.service';
import {UserInfoService} from './api/user-info.service';
import {SignalRService} from './api/signalr.service';

@Component({
	selector: 'play-me-extension-app',
	templateUrl: 'play-me-extension.component.html',
	styleUrls: ['play-me-extension.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class PlayMeExtensionAppComponent {
	constructor(private router: Router, private viewContainerRef: ViewContainerRef) {
		// You need this small hack in order to catch application root view container ref
    	this.viewContainerRef = viewContainerRef;
	}
}
