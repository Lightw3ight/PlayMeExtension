import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
    selector: 'pm-queue-with-comment',
    templateUrl: './queue-with-comment.component.html',
    styleUrls: ['./queue-with-comment.component.scss']
})
export class QueueWithCommentComponent implements OnInit {
    comment: string;
    constructor(private dialogRef: MdDialogRef<QueueWithCommentComponent>) { }

    ngOnInit() {
    }

    queueTrack() {
        this.dialogRef.close(this.comment);
    }
}
