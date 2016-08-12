import {Component, Input} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {ITrack} from '../../models'
import {QueueService} from '../../api';

import {SimpleTrackListItemComponent} from '../';

@Component({
	moduleId: module.id,
	selector: 'track-list-item',
	templateUrl: 'track-list-item.component.html'
})
export class TrackListItemComponent extends SimpleTrackListItemComponent {
	constructor(_queueService: QueueService) {
		super(_queueService);
	}
}