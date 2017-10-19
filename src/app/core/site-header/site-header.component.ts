import { IAudioZone } from './../../api/IAudioZone';
import { Component, OnInit, Output, EventEmitter, HostBinding, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AudioZoneService } from '../../api';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'pm-site-header',
    templateUrl: './site-header.component.html',
    styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {
    @HostBinding('class.site-header--opaque')
    public scrolled = false;

    @HostBinding('class.site-header--forced-opaque')
    public forceOpaqueView = false;

    // @HostBinding('class.site-header--enable-back')
    public enableBack$: Observable<boolean>;
    public hasFocus = false;
    public searchInput = new FormControl();
    public currentAudioZone: IAudioZone;
    @Output() toggleMenu = new EventEmitter();

    constructor(
        private router: Router,
        private _audioZoneService: AudioZoneService,
        private _location: Location,
        private _activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        window.addEventListener('scroll', this.onWindowScroll);

         this.searchInput.valueChanges
             .debounceTime(1000)
             .subscribe(this.onSearchChanged);

        this._audioZoneService.getCurrentZone().subscribe(zone => {
            this.currentAudioZone = zone;
        });

        const routeData$ = this.router.events
            .filter(event => event instanceof NavigationEnd)
            .map(() => this._activatedRoute)
            .map(route => route.firstChild)
            .switchMap(route => route.data);

        routeData$
            .subscribe(data => {
                this.forceOpaqueView = !!data.opaqueHeader;

                if (!data.preserveSearch) {
                    this.searchInput.reset();
                }
            });

        this.enableBack$ = routeData$
            .map(data => !data.isHome);
            // .subscribe(data => {
            //     this.enableBack = !data.isHome;
            // });

        // this.router.events.subscribe(event => {
        //     if (event instanceof NavigationEnd) {
        //         this.enableBack = event.url !== '/' && !event.url.startsWith('/now-playing');
        //         this.forceOpaqueView = event.url.startsWith('/search')
        //             || event.url.startsWith('/queue')
        //             || event.url.startsWith('/history');

        //         if (!this.forceOpaqueView) {
        //             this.searchInput.reset();
        //         }
        //     }
        // });
    }

    onSearchChanged = (newValue: string) => {
        if (newValue) {
            this.router.navigate(['/search', 'sp', newValue]);
        }
    }

    onToggleMenuClick() {
        this.toggleMenu.emit();
    }

    onSubmit() {
        this.router.navigate(['/search', 'sp', this.searchInput.value]);
    }

    onWindowScroll = (args: Event) => {
        this.scrolled = window.scrollY >= 64;
    }

    back() {
        this._location.back();
    }

    home() {
        this.router.navigateByUrl('/');
    }
}
