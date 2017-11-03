import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'pm-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
    @Output() public close = new EventEmitter<void>();

    public triggerClose () {
        console.log('closing');
        this.close.emit();
    }
}
