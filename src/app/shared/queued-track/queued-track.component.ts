import {Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {QueueService} from '../../api/queue.service';
import {IQueuedTrack} from '../../models';

@Component({
	selector: 'queued-track',
	templateUrl: 'queued-track.component.html',
	styleUrls: ['queued-track.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class QueuedTrackComponent implements OnInit {
	@Input() queuedTrack: IQueuedTrack;
	@Output() likeTrack = new EventEmitter();
	@Output() vetoTrack = new EventEmitter();

	constructor(private _queueService: QueueService) {

	}

	ngOnInit() {
		this.queuedTrack.StartedPlayingDateTime
	}

	like() {
		this.likeTrack.emit(null);
	}

	veto() {
		this.vetoTrack.emit(null);
	}

	queueTrack(message) {
		this._queueService.queueTrack(this.queuedTrack.Track);
	}
}