import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {QueueService} from '../../api/queue.service';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {MODAL_DIRECTVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';


import {ITrack} from '../../models/ITrack';

@Component({
	moduleId: module.id,
	selector: 'queue-track-button',
	templateUrl: 'queue-track-button.component.html',
	styleUrls: ['queue-track-button.component.css'],
	directives: [
		ROUTER_DIRECTIVES,
		MODAL_DIRECTVES
	],
	viewProviders: [
		BS_VIEW_PROVIDERS
	],
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