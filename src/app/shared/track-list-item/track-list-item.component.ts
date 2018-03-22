import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ITrack } from '../../api/models';
import { QueueService } from '../../api';
import { MatDialog } from '@angular/material';
import { SimpleTrackListItemComponent } from '../simple-track-list-item/simple-track-list-item.component';

@Component({
    selector: 'pm-track-list-item',
    templateUrl: 'track-list-item.component.html',
    styleUrls: [
        '../track-item/track-item.scss',
        'track-list-item.component.scss'
        ]
})
export class TrackListItemComponent extends SimpleTrackListItemComponent {
    @Input() public track: ITrack;

    constructor (
        _queueService: QueueService,
        dialog: MatDialog
    ) {
        super(_queueService, dialog);
    }
}
