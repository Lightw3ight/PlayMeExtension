import { routeAnimation } from './../router-animation';
import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SearchService } from '../api';
import { ISearchResults } from '../models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Component({
    selector: 'pm-search',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.scss'],
    animations: [routeAnimation]
})
export class SearchComponent implements OnInit {
    @HostBinding('@routerTransition') animate = true;
    results$: Observable<ISearchResults>;
    loading = false;
    searchQuery$: Observable<string>;

    constructor(
        private _route: ActivatedRoute,
        private _searchService: SearchService
    ) {
    }

    ngOnInit() {
        this.searchQuery$ = this._route.params
            .map(params => params['searchQuery'])
            .do(() => {
                this.loading = true;
            });

        this.results$ = this._route.params.switchMap(params => this._searchService.search(params['provider'], params['searchQuery']))
            .do(results => {
                this.loading = false;
            });
    }
}
