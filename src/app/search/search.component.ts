import {Component, OnInit} from '@angular/core';
import {Router, ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';

import {SearchService} from '../api';
import {ISearchResults} from '../models';


import {SearchBarComponent, BreadcrumbsComponent} from '../shared';
import {ArtistListItemComponent} from './artist-list-item/artist-list-item.component';
import {AlbumListItemComponent} from './album-list-item/album-list-item.component';
import {TrackListItemComponent} from '../shared';
import { TAB_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import {ZoneSelectorComponent} from '../now-playing';

@Component({
	moduleId: module.id,
	selector: 'app-search',
	templateUrl: 'search.component.html',
	styleUrls: ['search.component.css'],
	directives: [
		ROUTER_DIRECTIVES,
		SearchBarComponent,
		ArtistListItemComponent,
		AlbumListItemComponent,
		TrackListItemComponent,
		TAB_DIRECTIVES,
		BreadcrumbsComponent,
		ZoneSelectorComponent
	]
})
export class SearchComponent implements OnInit {
	searchQuery: string;
	provider: string;
	results: ISearchResults = {};
	tracksTabActive: boolean = false;
	albumsTabActive: boolean = false;
	artistTabActive: boolean = false;
	constructor(private _routeSegment: RouteSegment, private _searchService: SearchService) {

	}

	ngOnInit() {
		this.searchQuery = this._routeSegment.getParam('searchQuery');
		this.provider = this._routeSegment.getParam('provider');

		this._searchService.search(this.provider, this.searchQuery).then(results => {
			this.results = results;
			if (results.PagedArtists.Artists.length) {
				this.artistTabActive = true;
			} else if (results.PagedAlbums.Albums.length) {
				this.albumsTabActive = true;
			} else {
				this.tracksTabActive = true;
			}
		})
	}
}