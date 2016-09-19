import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {QueueService} from '../../api/queue.service';


import {ITrack} from '../../models/ITrack';

@Component({
	selector: 'queue-track-button',
	templateUrl: 'queue-track-button.component.html',
	styleUrls: ['queue-track-button.component.css'],
	encapsulation: ViewEncapsulation.Emulated
})
export class QueueTrackButtonComponent implements OnInit {
	@Input() track: ITrack;

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
}