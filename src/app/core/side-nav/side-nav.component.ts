import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'pm-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
    @Output() close = new EventEmitter<void>();
    constructor() { }

    ngOnInit() {
    }

    triggerClose() {
        console.log('closing');
        this.close.emit();
    }
}
