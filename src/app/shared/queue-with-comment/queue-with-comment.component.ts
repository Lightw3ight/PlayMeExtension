import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
    selector: 'pm-queue-with-comment',
    templateUrl: './queue-with-comment.component.html',
    styleUrls: ['./queue-with-comment.component.scss']
})
export class QueueWithCommentComponent implements OnInit {
    comment: string;
    constructor(private dialogRef: MatDialogRef<QueueWithCommentComponent>) { }

    ngOnInit() {
    }

    queueTrack() {
        this.dialogRef.close(this.comment);
    }
}
