import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITrack } from '../../api/models';
import { QueueService, SpotifyAuthService } from '../../api';
import { MatDialog } from '@angular/material';
import { SimpleTrackListItemComponent } from '../simple-track-list-item/simple-track-list-item.component';
import { Observable } from 'rxjs';

@Component({
    selector: 'pm-track-list-item',
    templateUrl: 'track-list-item.component.html',
    styleUrls: [
        '../track-item/track-item.scss',
        'track-list-item.component.scss'
        ]
})
export class TrackListItemComponent extends SimpleTrackListItemComponent implements OnInit {

    @Input() public track: ITrack;

    public hasSpotifyFeatures$: Observable<boolean>;

    constructor (
        _queueService: QueueService,
        private _spotifyAuthService: SpotifyAuthService,
        dialog: MatDialog
    ) {
        super(_queueService, dialog);
    }

    ngOnInit (): void {
      this.hasSpotifyFeatures$ = this._spotifyAuthService.isLoggedIn$;
    }

    public trackByFn (index: number, item) {
        return index;
    }
}
