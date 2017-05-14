import { IAudioZone } from './../../api/IAudioZone';
import { Component, OnInit, Output, EventEmitter, HostBinding, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { AudioZoneService } from '../../api';
import { Location } from '@angular/common';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'pm-site-header',
    templateUrl: './site-header.component.html',
    styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {
    @HostBinding('class.site-header--opaque')
    scrolled = false;

    @HostBinding('class.site-header--forced-opaque')
    forceOpaqueView = false;

    @HostBinding('class.site-header--enable-back')
    public enableBack = true;

    hasFocus = false;
    searchInput = new FormControl();
    currentAudioZone: IAudioZone;
    @Output() toggleMenu = new EventEmitter();

    constructor(private router: Router, private _audioZoneService: AudioZoneService, private _location: Location) { }

    ngOnInit() {
        window.addEventListener('scroll', this.onWindowScroll);

         this.searchInput.valueChanges
             .debounceTime(1000)
             .subscribe(this.onSearchChanged);

        this._audioZoneService.getCurrentZone().subscribe(zone => {
            this.currentAudioZone = zone;
        });

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.enableBack = event.url !== '/';
                //this.enableBack = !event.url.startsWith('/now-playing');
                this.forceOpaqueView = event.url.startsWith('/search')
                    || event.url.startsWith('/queue')
                    || event.url.startsWith('/history');

                if (!this.forceOpaqueView) {
                    this.searchInput.reset();
                }
            }
        });
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
