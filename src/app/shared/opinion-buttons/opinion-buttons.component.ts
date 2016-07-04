import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

import {IQueuedTrack} from '../../models';
import {UserListComponent} from '../';


@Component({
	moduleId: module.id,
	selector: 'opinion-buttons',
	templateUrl: 'opinion-buttons.component.html',
	styleUrls: ['opinion-buttons.component.css'],
	directives: [
		UserListComponent
	],
	encapsulation: ViewEncapsulation.None
})
export class OpinionButtonsComponent implements OnInit {
	@Input() track: IQueuedTrack;
	@Output() veto = new EventEmitter();
	@Output() like = new EventEmitter();

	constructor() { }

	ngOnInit() {
	}

	vetoTrack(){
		this.veto.emit(null);
	}

	likeTrack(){
		this.like.emit(null);
	}
}
