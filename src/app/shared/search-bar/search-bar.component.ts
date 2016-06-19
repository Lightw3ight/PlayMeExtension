import {Component, OnInit} from '@angular/core';
import {Router, ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'search-bar',
	templateUrl: 'search-bar.component.html',
	directives: [
		ROUTER_DIRECTIVES
	]
})
export class SearchBarComponent implements OnInit {
	searchValue: string;
	constructor(private _routeSegment: RouteSegment, private _router: Router) {

	}
	ngOnInit() {

	}

	search(searchQuery) {
		this._router.navigate(['/search', 'sp', searchQuery]);
	}
}