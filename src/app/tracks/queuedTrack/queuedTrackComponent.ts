import {Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {QueueService} from '../../services/queueService';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';


import {IQueuedTrack} from '../../models/IQueuedTrack.d';
import {QueueTrackButtonComponent} from '../queueTrackButtonComponent';
import {UserListComponent} from '../userList/userListComponent';

@Component({
	selector: 'queued-track',
	templateUrl: '/app/tracks/queuedTrack/queuedTrackComponent.html',
	styleUrls: ['/app/tracks/queuedTrack/queuedTrackComponent.css'],
	directives:[
		ROUTER_DIRECTIVES,
		QueueTrackButtonComponent,
		UserListComponent
	],
	encapsulation: ViewEncapsulation.None
})
export class QueuedTrackComponent implements OnInit{
	@Input() queuedTrack: IQueuedTrack;
	@Output() likeTrack = new EventEmitter();
	@Output() vetoTrack = new EventEmitter();
	
	constructor(private _queueService: QueueService){
		
	}
	
	ngOnInit(){
		this.queuedTrack.StartedPlayingDateTime
	}
	
	like(){
		this.likeTrack.emit(null);
	}
	
	veto(){
		this.vetoTrack.emit(null);
	}
	
	queueTrack(message){
		this._queueService.queueTrack(this.queuedTrack.Track);
	}
}