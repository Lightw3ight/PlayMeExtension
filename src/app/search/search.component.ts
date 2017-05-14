import { routeAnimation } from './../router-animation';
import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SearchService } from '../api';
import { ISearchResults } from '../models';

@Component({
    selector: 'pm-search',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.scss'],
    animations: [routeAnimation]
})
export class SearchComponent implements OnInit {
    @HostBinding('@routerTransition') animate = true;
    results: ISearchResults = {};
    loading = false;
    searchQuery: string;

    constructor(
        private _route: ActivatedRoute,
        private _searchService: SearchService
    ) {
    }

    ngOnInit() {
        this._route.params.switchMap(params => {
            this.loading = true;
            this.searchQuery = params['searchQuery']
            return this._searchService.search(params['provider'], this.searchQuery);
        }).subscribe(results => {
            this.results = results;
            this.loading = false;
        });
    }
}
