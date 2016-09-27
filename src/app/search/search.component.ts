import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {SearchService} from '../api';
import {ISearchResults} from '../models';

@Component({
	selector: 'app-search',
	templateUrl: 'search.component.html',
	styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {
	searchQuery: string;
	provider: string;
	results: ISearchResults = {};
	tracksTabActive: boolean = false;
	albumsTabActive: boolean = false;
	artistTabActive: boolean = false;
	constructor(private _route: ActivatedRoute,
		private _searchService: SearchService) {
	}

	ngOnInit() {
		this._route.params.subscribe(params => {
			this.searchQuery = params['searchQuery'];
			this.provider = params['provider'];

			this._searchService.search(this.provider, this.searchQuery).then((results: ISearchResults) => {
				this.results = results;
				if (results.PagedArtists.Artists.length) {
					this.artistTabActive = true;
				} else if (results.PagedAlbums.Albums.length) {
					this.albumsTabActive = true;
				} else {
					this.tracksTabActive = true;
				}
			});
		});
	}
}