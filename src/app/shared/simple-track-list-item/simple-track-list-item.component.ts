import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ITrack } from '../../api/models';
import { QueueService } from '../../api/queue.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { QueueWithCommentComponent } from '../queue-with-comment/queue-with-comment.component';

@Component({
    selector: 'pm-simple-track-list-item',
    templateUrl: 'simple-track-list-item.component.html',
    styleUrls: [
        '../track-item/track-item.scss',
        './simple-track-list-item.component.scss'
    ]
})
export class SimpleTrackListItemComponent {
    @Input() public track: ITrack;
    @Input() public trackNumber: number;

    constructor (
        protected _queueService: QueueService,
        public dialog: MatDialog
    ) { }

    public queueTrack () {
        this._queueService.queueTrack(this.track);
    }

    public queueWithComment () {
        const dialogRef = this.dialog.open(QueueWithCommentComponent);
            dialogRef.afterClosed().subscribe(comment => {
                if (comment) {
                    this._queueService.queueTrack(this.track, comment);
                }
            });
    }

    public formatTime (time: string) {
        return time.indexOf('00:') === 0 ? time.substr(3) : time;
    }

    public formatTimeFromMs (time: number) {
      return this.msToTime(time);
    }

    private msToTime (duration): string {
      const h = duration / (1000 * 60 * 60);
      const hours = Math.floor(h);

      const m = (h - hours) * 60;
      const minutes = Math.floor(m);

      const seconds = Math.floor((m - minutes) * 60);

      return hours ? `${this.padNumber(hours)}:${this.padNumber(minutes)}:${this.padNumber(seconds)}` : `${this.padNumber(minutes)}:${this.padNumber(seconds)}`;
    }

    private padNumber (num: number) {
      return (num < 10) ? '0' + num : num;
    }
}
