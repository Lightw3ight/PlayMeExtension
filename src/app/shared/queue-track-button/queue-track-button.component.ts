import {Component, Output, Input, OnInit, ViewEncapsulation, EventEmitter} from '@angular/core';
import {QueueService} from '../../api/queue.service';
import {IQueuedTrack} from '../../models';

import {ITrack} from '../../models/ITrack';

@Component({
	selector: 'queue-track-button',
	templateUrl: 'queue-track-button.component.html',
	styleUrls: ['queue-track-button.component.scss'],
	encapsulation: ViewEncapsulation.Emulated
})
export class QueueTrackButtonComponent implements OnInit {
	@Input() track: ITrack;
	@Input() isOpen: boolean;
	@Input() queuedTrack: IQueuedTrack;
	@Output() likeTrack = new EventEmitter();
	@Output() vetoTrack = new EventEmitter();

	public get hasQueuedTrack() : boolean {
		return this.queuedTrack && !this.queuedTrack.StartedPlayingDateTime;
	}

	constructor(private _queueService: QueueService) {

	}

	ngOnInit() {
	}

	focusComments(elem: HTMLElement){
		setTimeout(() => {
			elem.focus();
		}, 300);
	}

	queueTrack(message) {
		this._queueService.queueTrack(this.track, message);
	}

	like() {
		this.likeTrack.emit(null);
	}

	veto() {
		this.vetoTrack.emit(null);
	}
}