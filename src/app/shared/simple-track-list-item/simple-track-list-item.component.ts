import {Component, Input} from '@angular/core';
import {Router, ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';
import {ITrack} from '../../models/ITrack'
import {QueueService} from '../../api/queue.service';
import {QueueTrackButtonComponent} from '../queue-track-button/';

@Component({
	moduleId: module.id,
	selector: 'simple-track-list-item',
	templateUrl: 'simple-track-list-item.component.html',
	styleUrls: ['simple-track-list-item.component.css'],
	directives: [
		ROUTER_DIRECTIVES,
		QueueTrackButtonComponent
	]
})
export class SimpleTrackListItemComponent {
	@Input() track: ITrack;

	constructor(private _queueService: QueueService) {

	}

	queueTrack(track: ITrack) {
		this._queueService.queueTrack(track);
	}
}