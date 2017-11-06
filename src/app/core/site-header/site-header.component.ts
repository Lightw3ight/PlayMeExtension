import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AudioZoneService, IAudioZone, SearchService } from '../../api';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import { filter, map, switchMap, debounceTime } from 'rxjs/operators';
import { MatAutocompleteTrigger } from '@angular/material';

@Component({
    selector: 'pm-site-header',
    templateUrl: './site-header.component.html',
    styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {
    @Output() toggleMenu = new EventEmitter();
    @HostBinding('class.site-header--opaque') public scrolled = false;
    @HostBinding('class.site-header--forced-opaque') public forceOpaqueView = false;
    @ViewChild('trigger', { read: MatAutocompleteTrigger }) private _autocompleteTrigger: MatAutocompleteTrigger;
    public enableBack$: Observable<boolean>;
    public hasFocus = false;
    public searchInput = new FormControl();
    public currentAudioZone$: Observable<string>;
    public zones$: Observable<IAudioZone[]>;
    public suggestions$: Observable<string>;

    constructor (
        private router: Router,
        private _audioZoneService: AudioZoneService,
        private _location: Location,
        private _activatedRoute: ActivatedRoute,
        private _searchService: SearchService
    ) { }

    public ngOnInit () {
        this.zones$ = this._audioZoneService.getAllZones();
        this.currentAudioZone$ = this._audioZoneService.getCurrentZone().pipe(
            map(zone => zone.name));

        this.suggestions$ = this.searchInput.valueChanges.pipe(
            debounceTime(200),
            map(val => <string>val),
            switchMap(value => {
                return !value ? Observable.empty() : this._searchService.suggestions(value);
            })
        );


        const routeData$ = this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => this._activatedRoute),
            map(route => route.firstChild),
            switchMap(route => route.data));

        routeData$
            .subscribe(data => {
                this.forceOpaqueView = !!data.opaqueHeader;

                if (!data.preserveSearch) {
                    this.searchInput.reset();
                }
            });

        this.enableBack$ = routeData$.pipe(
            map(data => !data.isHome));
    }

    public search (searchValue: string) {
        if (searchValue) {
            this.router.navigate(['/search', 'sp', searchValue]);
            this._autocompleteTrigger.closePanel();
        }
    }

    public onToggleMenuClick () {
        this.toggleMenu.emit();
    }

    public onSubmit () {
        this.search(this.searchInput.value);
    }

    @HostListener('window:scroll', ['$event'])
    public onWindowScroll (args: Event) {
        this.scrolled = window.scrollY >= 64;
    }

    public back () {
        this._location.back();
    }

    public changeZone (zone: IAudioZone) {
        this._audioZoneService.setCurrentZone(zone.path);
    }
}
