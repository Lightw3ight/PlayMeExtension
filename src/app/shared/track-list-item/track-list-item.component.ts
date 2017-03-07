import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ITrack } from '../../models';
import { QueueService } from '../../api';
import { MdDialog } from '@angular/material';
import { SimpleTrackListItemComponent } from '../simple-track-list-item';

@Component({
    selector: 'pm-track-list-item',
    templateUrl: 'track-list-item.component.html',
    styleUrls: [
        '../simple-track-list-item/track-item.scss',
        'track-list-item.component.scss'
        ]
})
export class TrackListItemComponent extends SimpleTrackListItemComponent {
    @Input() track: ITrack;

    constructor(_queueService: QueueService, dialog: MdDialog) {
        super(_queueService, dialog);
    }
}
