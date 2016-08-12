import {Component, Input} from '@angular/core';
import {ITrack} from '../../models/ITrack'
import {QueueService} from '../../api/queue.service';

@Component({
	moduleId: module.id,
	selector: 'simple-track-list-item',
	templateUrl: 'simple-track-list-item.component.html',
	styleUrls: ['simple-track-list-item.component.css']
})
export class SimpleTrackListItemComponent {
	@Input() track: ITrack;

	constructor(private _queueService: QueueService) {

	}

	queueTrack(track: ITrack) {
		this._queueService.queueTrack(track);
	}
}