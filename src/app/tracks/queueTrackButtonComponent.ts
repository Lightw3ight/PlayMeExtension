import {Component, Input, OnInit} from '@angular/core';
import {QueueService} from '../services/queueService';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';


import {ITrack} from '../models/ITrack.d';

@Component({
	selector: 'queue-track-button',
	templateUrl: '/app/tracks/queueTrackButtonComponent.html',
	directives:[
		ROUTER_DIRECTIVES
	]
})
export class QueueTrackButtonComponent implements OnInit{
	@Input() track: ITrack;
	
	constructor(private _queueService: QueueService){
		
	}
	
	ngOnInit(){
	}
	
	queueTrack(message){
		this._queueService.queueTrack(this.track);
	}
}