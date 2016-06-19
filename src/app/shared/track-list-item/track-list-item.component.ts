import {Component, Input} from '@angular/core';
import {Router, ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';
import {ITrack} from '../../models'
import {QueueService} from '../../api';
import {QueueTrackButtonComponent} from '../';

import {SimpleTrackListItemComponent} from '../';

@Component({
	moduleId: module.id,
	selector: 'track-list-item',
	templateUrl: 'track-list-item.component.html',
	directives: [
		ROUTER_DIRECTIVES,
		QueueTrackButtonComponent
	]
})
export class TrackListItemComponent extends SimpleTrackListItemComponent {
	constructor(_queueService: QueueService) {
		super(_queueService);
	}
}