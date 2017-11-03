import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

import { IQueuedTrack } from '../../models';


@Component({
    selector: 'pm-opinion-buttons',
    templateUrl: 'opinion-buttons.component.html',
    styleUrls: ['opinion-buttons.component.scss']
})
export class OpinionButtonsComponent {
    @Input() public track: IQueuedTrack;
    @Output() public veto = new EventEmitter();
    @Output() public like = new EventEmitter();
    public showVetoNames = false;
    public showLikeNames = false;

    public vetoTrack () {
        this.veto.emit(null);
    }

    public likeTrack () {
        this.like.emit(null);
    }
}
