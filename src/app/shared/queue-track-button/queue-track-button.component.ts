import {Component, Input, OnInit} from '@angular/core';
import {QueueService} from '../../api/queue.service';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';


import {ITrack} from '../../models/ITrack';

@Component({
	moduleId: module.id,
	selector: 'queue-track-button',
	templateUrl: 'queue-track-button.component.html',
	directives: [
		ROUTER_DIRECTIVES
	]
})
export class QueueTrackButtonComponent implements OnInit {
	@Input() track: ITrack;

	constructor(private _queueService: QueueService) {

	}

	ngOnInit() {
	}

	queueTrack(message) {
		this._queueService.queueTrack(this.track);
	}
}