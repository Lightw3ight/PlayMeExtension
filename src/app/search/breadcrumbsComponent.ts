import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Location} from '@angular/common';

@Component({
	selector: 'breadcrumb-bar',
	templateUrl: '/app/search/breadcrumbsComponent.html',
	directives: [
		ROUTER_DIRECTIVES
	]
})
export class BreadcrumbsComponent implements OnInit {
	constructor(private _location: Location){
		
	}
	
	ngOnInit(){
		
	}
	
	back(){
		this._location.back();
	}
}