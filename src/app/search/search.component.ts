import { routeAnimation } from './../router-animation';
import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SearchService } from '../api';
import { ISearchResults } from '../api/models';
import { Observable } from 'rxjs/Observable';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
    selector: 'pm-search',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.scss'],
    animations: [routeAnimation]
})
export class SearchComponent implements OnInit {
    @HostBinding('@routerTransition') animate = true;
    public results$: Observable<ISearchResults>;
    public loading = false;
    public searchQuery$: Observable<string>;

    constructor (
        private _route: ActivatedRoute,
        private _searchService: SearchService
    ) { }

    public ngOnInit () {
        this.searchQuery$ = this._route.params.pipe(
            map(params => params['searchQuery']),
            tap(() => {
                this.loading = true;
            }));

        this.results$ = this._route.params.pipe(
            switchMap(params => this._searchService.search(params['provider'], params['searchQuery'])),
            tap(results => {
                this.loading = false;
            }));
    }

    public trackByFn (index: number, item) {
        return index;
    }
}
