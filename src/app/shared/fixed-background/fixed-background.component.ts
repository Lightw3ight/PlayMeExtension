import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'pm-fixed-background',
    templateUrl: './fixed-background.component.html',
    styleUrls: ['./fixed-background.component.scss']
})
export class FixedBackgroundComponent implements OnInit {
    @Input() blurred = false;
    @Input() src: string;

    constructor() { }

    ngOnInit() {
    }

}
