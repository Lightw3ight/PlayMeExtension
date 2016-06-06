import {Component, Input} from '@angular/core';
import {Router, ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';
import {ITrack} from '../models/ITrack.d'
import {QueueService} from '../services/queueService';
import {QueueTrackButtonComponent} from './queueTrackButtonComponent';

import {SimpleTrackListItemComponent} from './simpleTrackListItemComponent';

@Component({
	selector: 'track-list-item',
	templateUrl: '/app/tracks/trackListItemComponent.html',
	directives:[
		ROUTER_DIRECTIVES,
		QueueTrackButtonComponent
	]
})
export class TrackListItemComponent extends SimpleTrackListItemComponent{
	constructor(_queueService: QueueService){
		super(_queueService);
	}
}