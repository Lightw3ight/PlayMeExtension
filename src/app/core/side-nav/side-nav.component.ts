import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { trigger, state, style, transition, animate, AnimationTriggerMetadata } from '@angular/animations';
import { AudioZoneService, IAudioZone } from 'app/api';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
    selector: 'pm-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
    animations: [
        trigger('navDrawer', [
            state('1',
                style({ transform: 'translateX(0%)'})
            ),
            state('0',
                style({ transform: 'translateX(-100%)'})
            ),
            transition('* => 1', [
                style({ transform: 'translateX(-100%)'}),
                animate('300ms ease-in-out', style({ transform: 'translateX(0%)'}))
            ]),
            transition(`* => 0`, [
                style({ transform: 'translateX(0%)', opacity: 1 }),
                animate('300ms ease-in-out', style({ transform: 'translateX(-100%)' }))
            ])
        ]),

        trigger('shieldFadeIn', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('200ms', style({ opacity: 1 }))
            ]),

            transition(':leave', [
                style({ opacity: 1 }),
                animate('200ms', style({ opacity: 0 }))
            ])
        ])
    ]
})
export class SideNavComponent implements OnInit {
    @Input() public isOpen = false;
    public $currentZonePath: Observable<string>;
    private _lastScroll = 0;

    constructor (
        private _audioZoneService: AudioZoneService
    ) { }

    public ngOnInit () {
        this.$currentZonePath = this._audioZoneService.getCurrentZone().pipe(map(z => `${z.path}/`));
    }

    public open () {
        this.isOpen = true;
        this._lastScroll = window.scrollY;
        window.document.documentElement.style.overflow = window.document.body.style.overflow = 'hidden';
    }

    public close () {
        this.isOpen = false;
        window.document.documentElement.style.overflow = window.document.body.style.overflow = null;
        window.scrollTo(0, this._lastScroll);
    }
}
