import {Component, Input} from '@angular/core';
import {Router, ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';
import {ITrack} from '../models/ITrack.d'
import {QueueService} from '../services/queueService';
import {QueueTrackButtonComponent} from './queueTrackButtonComponent';

@Component({
	selector: 'simple-track-list-item',
	templateUrl: '/app/tracks/simpleTrackListItemComponent.html',
	directives:[
		ROUTER_DIRECTIVES,
		QueueTrackButtonComponent
	]
})
export class SimpleTrackListItemComponent{
	@Input() track: ITrack;
	
	constructor(private _queueService: QueueService){
		
	}
	
	queueTrack(track: ITrack){
		this._queueService.queueTrack(track);
	}
}