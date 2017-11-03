import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
    selector: 'pm-queue-with-comment',
    templateUrl: './queue-with-comment.component.html',
    styleUrls: ['./queue-with-comment.component.scss']
})
export class QueueWithCommentComponent {
    public comment: string;

    constructor (
        private _dialogRef: MatDialogRef<QueueWithCommentComponent>
    ) { }

    public queueTrack () {
        this._dialogRef.close(this.comment);
    }
}
