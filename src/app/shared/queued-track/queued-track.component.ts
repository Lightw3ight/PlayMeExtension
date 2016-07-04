import {Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {QueueService} from '../../api/queue.service';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {IQueuedTrack} from '../../models/IQueuedTrack.d';
import {QueueTrackButtonComponent} from '../';
import {UserListComponent} from '../';
import {OpinionButtonsComponent} from '../opinion-buttons';

@Component({
	moduleId: module.id,
	selector: 'queued-track',
	templateUrl: 'queued-track.component.html',
	styleUrls: ['queued-track.component.css'],
	directives: [
		ROUTER_DIRECTIVES,
		QueueTrackButtonComponent,
		UserListComponent,
		OpinionButtonsComponent
	],
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