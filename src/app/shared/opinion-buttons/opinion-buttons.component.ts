import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

import { IQueuedTrack } from '../../models';


@Component({
    selector: 'pm-opinion-buttons',
    templateUrl: 'opinion-buttons.component.html',
    styleUrls: ['opinion-buttons.component.scss']
})
export class OpinionButtonsComponent implements OnInit {
    showVetoNames = false;
    showLikeNames = false;
    @Input() track: IQueuedTrack;
    @Output() veto = new EventEmitter();
    @Output() like = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    vetoTrack() {
        this.veto.emit(null);
    }

    likeTrack() {
        this.like.emit(null);
    }
}
