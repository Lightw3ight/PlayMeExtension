import { routeAnimation } from './../../router-animation';
import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
    selector: 'pm-fixed-background',
    templateUrl: './fixed-background.component.html',
    styleUrls: ['./fixed-background.component.scss']
    // animations: [ trigger('routerTransition', [
    //     transition('void => *', [
    //         style({ left: '100%' }),
    //         animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ left: '0' }))
    //     ]),
    //     transition('* => void', [
    //         style({ left: '0' }),
    //         animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ left: '-100%' }))
    //     ])
    // ]) ]
})
export class FixedBackgroundComponent {
    @Input() public blurred = false;
    @Input() public src: string;
    // @HostBinding('@routerTransition') public animate = true;
}
