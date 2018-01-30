import { QueueWithCommentComponent } from '../queue-with-comment/queue-with-comment.component';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { QueueService } from '../../api/queue.service';
import { IQueuedTrack } from '../../models';
import { MatDialog, MatDialogRef } from '@angular/material';


@Component({
    selector: 'pm-queued-track',
    templateUrl: 'queued-track.component.html',
    styleUrls: [
        '../track-item/track-item.scss',
        './queued-track.component.scss'
    ]
})
export class QueuedTrackComponent {
    @Input() public queuedTrack: IQueuedTrack;
    @Output() public likeTrack = new EventEmitter();
    @Output() public vetoTrack = new EventEmitter();
    public isMoreInfoVisible = false;

    constructor (
        private _queueService: QueueService,
        public dialog: MatDialog
    ) { }

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
}
