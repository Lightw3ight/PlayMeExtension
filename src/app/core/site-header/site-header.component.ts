import { IAudioZone } from './../../api/IAudioZone';
import { Component, OnInit, Output, EventEmitter, HostBinding, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AudioZoneService } from '../../api';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { filter, map, switchMap, debounceTime } from 'rxjs/operators';

@Component({
    selector: 'pm-site-header',
    templateUrl: './site-header.component.html',
    styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {
    @Output() toggleMenu = new EventEmitter();
    @HostBinding('class.site-header--opaque')
    public scrolled = false;
    @HostBinding('class.site-header--forced-opaque')
    public forceOpaqueView = false;
    public enableBack$: Observable<boolean>;
    public hasFocus = false;
    public searchInput = new FormControl();
    public currentAudioZone: IAudioZone;

    constructor (
        private router: Router,
        private _audioZoneService: AudioZoneService,
        private _location: Location,
        private _activatedRoute: ActivatedRoute
    ) { }

    public ngOnInit () {
        window.addEventListener('scroll', this.onWindowScroll);

         this.searchInput.valueChanges
            .pipe(debounceTime(1000))
            .subscribe(this.onSearchChanged);

        this._audioZoneService.getCurrentZone()
            .subscribe(zone => {
                this.currentAudioZone = zone;
            });

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

    public onSearchChanged = (newValue: string) => {
        if (newValue) {
            this.router.navigate(['/search', 'sp', newValue]);
        }
    }

    public onToggleMenuClick () {
        this.toggleMenu.emit();
    }

    public onSubmit () {
        this.router.navigate(['/search', 'sp', this.searchInput.value]);
    }

    public onWindowScroll = (args: Event) => {
        this.scrolled = window.scrollY >= 64;
    }

    public back () {
        this._location.back();
    }

    public home () {
        this.router.navigateByUrl('/');
    }
}
