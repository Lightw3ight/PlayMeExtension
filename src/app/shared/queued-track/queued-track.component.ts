import { QueueWithCommentComponent } from '../queue-with-comment/queue-with-comment.component';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { QueueService } from '../../api/queue.service';
import { IQueuedTrack } from '../../models';
import { MdDialog, MdDialogRef } from '@angular/material';


@Component({
    selector: 'pm-queued-track',
    templateUrl: 'queued-track.component.html',
    styleUrls: [
        '../simple-track-list-item/track-item.scss',
        './queued-track.component.scss'
    ]
})
export class QueuedTrackComponent implements OnInit {
    @Input() queuedTrack: IQueuedTrack;
    @Output() likeTrack = new EventEmitter();
    @Output() vetoTrack = new EventEmitter();
    isMoreInfoVisible = false;

    constructor(private _queueService: QueueService, public dialog: MdDialog) {

    }

    ngOnInit() {
    }

    like() {
        this.likeTrack.emit(null);
    }

    veto() {
        this.vetoTrack.emit(null);
    }

    queueTrack() {
        this._queueService.queueTrack(this.queuedTrack.Track);
    }

    queueWithComment() {
        const dialogRef = this.dialog.open(QueueWithCommentComponent);
            dialogRef.afterClosed().subscribe(comment => {
                if (comment) {
                    this._queueService.queueTrack(this.queuedTrack.Track, comment);
                }
            });
    }

    public get hasQueuedTrack(): boolean {
        return !this.queuedTrack.StartedPlayingDateTime;
    }
}