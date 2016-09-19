import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {ITrack} from '../../models'
import {QueueService} from '../../api';

import {SimpleTrackListItemComponent} from '../simple-track-list-item';

@Component({
	selector: 'track-list-item',
	templateUrl: 'track-list-item.component.html'
})
export class TrackListItemComponent extends SimpleTrackListItemComponent {
	constructor(_queueService: QueueService) {
		super(_queueService);
	}

	@Input() track: ITrack;

	queueTrack(track: ITrack) {
		this._queueService.queueTrack(track);
	}
}