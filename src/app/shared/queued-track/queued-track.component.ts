import { QueueWithCommentComponent } from '../queue-with-comment/queue-with-comment.component';
import { Component, Input, OnInit, Output, EventEmitter, HostBinding } from '@angular/core';
import { QueueService } from '../../api/queue.service';
import { IQueuedTrack } from '../../api/models';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { SpotifyAuthService } from 'app/api';


@Component({
    selector: 'pm-queued-track',
    templateUrl: 'queued-track.component.html',
    styleUrls: [
        '../track-item/track-item.scss',
        './queued-track.component.scss'
    ]
})
export class QueuedTrackComponent implements OnInit {
    @Input() public queuedTrack: IQueuedTrack;
    @Output() public likeTrack = new EventEmitter();
    @Output() public vetoTrack = new EventEmitter();
    @HostBinding('class.queued-track__more-info-open') public isMoreInfoVisible = false;

    constructor (
      public dialog: MatDialog,
      private _queueService: QueueService,
      private _spotifyAuthService: SpotifyAuthService
    ) { }

    public hasSpotifyFeatures$: Observable<boolean>;

    ngOnInit (): void {
      this.hasSpotifyFeatures$ = this._spotifyAuthService.isLoggedIn$;
    }

    public like () {
        this.likeTrack.emit(null);
    }

    public veto () {
        this.vetoTrack.emit(null);
    }

    public queueTrack () {
        this._queueService.queueTrack(this.queuedTrack.Track);
    }

    public queueWithComment () {
        const dialogRef = this.dialog.open(QueueWithCommentComponent);
            dialogRef.afterClosed().subscribe(comment => {
                if (comment) {
                    this._queueService.queueTrack(this.queuedTrack.Track, comment);
                }
            });
    }

    public get hasQueuedTrack (): boolean {
        return !this.queuedTrack.StartedPlayingDateTime;
    }


    public trackByFn (index: number, item) {
        return index;
    }
}
