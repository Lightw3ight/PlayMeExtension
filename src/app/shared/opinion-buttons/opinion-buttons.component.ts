import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';

import { IQueuedTrack } from '../../models';


@Component({
    selector: 'pm-opinion-buttons',
    templateUrl: 'opinion-buttons.component.html',
    styleUrls: ['opinion-buttons.component.scss']
})
export class OpinionButtonsComponent implements OnChanges {
    @Input() public track: IQueuedTrack;
    @Output() public veto = new EventEmitter();
    @Output() public like = new EventEmitter();
    public showVetoNames = false;
    public showLikeNames = false;
    public maxUserCount = 10;

    public vetoTrack () {
        this.veto.emit(null);
    }

    public likeTrack () {
        this.like.emit(null);
    }

    public ngOnChanges (changes: SimpleChanges): void {
        if (changes.track) {
            // this.track.Likes[0].userPhotoUrl;
        }
    }
}
