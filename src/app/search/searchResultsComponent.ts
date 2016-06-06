import {Component, OnInit} from '@angular/core';
import {Router, ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';

import {SearchService} from '../services/searchService';
import {ISearchResults} from '../models/ISearchResults';


import {SearchBarComponent} from './searchBarComponent';
import {ArtistListItemComponent} from '../artists/artistListItemComponent';
import {AlbumListItemComponent} from '../albums/albumListItemComponent'
import {TrackListItemComponent} from '../tracks/trackListItemComponent';
import { TAB_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import {BreadcrumbsComponent} from '../search/breadcrumbsComponent';
import {ZoneSelectorComponent} from '../nowPlaying/zoneSelectorComponent';

@Component({
	selector: 'search-results',
	templateUrl: '/app/search/searchResultsComponent.html',
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
export class SearchResultsComponent implements OnInit {
	searchQuery: string;
	provider: string;
	results: ISearchResults = {};
	constructor(private _routeSegment: RouteSegment, private _searchService: SearchService){
		
	}
	
	ngOnInit(){
		this.searchQuery = this._routeSegment.getParam('searchQuery');
		this.provider = this._routeSegment.getParam('provider');
		
		this._searchService.search(this.provider, this.searchQuery).then(results =>{
			this.results = results;
		})
	}
}