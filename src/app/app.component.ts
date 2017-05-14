import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from './api/search.service';
import { ArtistService } from './api/artist.service';
import { AlbumService } from './api/album.service';
import { QueueService } from './api/queue.service';
import { AudioZoneService } from './api/audio-zone.service';
import { UserInfoService } from './api/user-info.service';
import { SignalRService } from './api/signalr.service';

@Component({
    selector: 'pm-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    private _navOpen = false;
    private _lastScroll = 0;

    public get navOpen(): boolean {
        return this._navOpen;
    }

    public set navOpen(value: boolean) {
        this._navOpen = value;
        this._lastScroll = window.scrollY;
        window.document.documentElement.style.overflow = value ? 'hidden' : 'visible';
    }

    constructor(private router: Router, private viewContainerRef: ViewContainerRef) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;

        window.addEventListener('scroll', this.onWindowScroll);
    }

    blah() {
        console.log('oi');
    }

    onWindowScroll = (args: Event) => {
        if (this.navOpen) {
            args.preventDefault();
            args.stopPropagation();
            window.scrollTo(0, this._lastScroll);
        }
    }
}
