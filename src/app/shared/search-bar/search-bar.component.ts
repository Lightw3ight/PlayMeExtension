import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
	selector: 'search-bar',
	templateUrl: 'search-bar.component.html'
})
export class SearchBarComponent implements OnInit {
	searchValue: string;
	constructor(private _router: Router) {

	}
	ngOnInit() {

	}

	search(searchQuery) {
		this._router.navigate(['/search', 'sp', searchQuery]);
	}
}