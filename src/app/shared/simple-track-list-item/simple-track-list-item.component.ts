import {Component, Input, ViewEncapsulation} from '@angular/core';
import {ITrack} from '../../models/ITrack'
import {QueueService} from '../../api/queue.service';

@Component({
	selector: 'simple-track-list-item',
	templateUrl: 'simple-track-list-item.component.html',
	styleUrls: ['simple-track-list-item.component.scss'],
	 encapsulation: ViewEncapsulation.None
})
export class SimpleTrackListItemComponent {
	@Input() track: ITrack;
	@Input() trackNumber: number;


	constructor(protected _queueService: QueueService) {

	}

	queueTrack(track: ITrack) {
		this._queueService.queueTrack(track);
	}

	formatTime(time: string){
		return time.indexOf('00:') == 0 ? time.substr(3) : time;
	}
}