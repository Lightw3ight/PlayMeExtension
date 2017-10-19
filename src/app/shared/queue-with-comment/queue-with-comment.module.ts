import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { QueueWithCommentComponent } from './queue-with-comment.component';
import { MatInputModule, MatButtonModule, MatDialogModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatDialogModule
    ],
    exports: [QueueWithCommentComponent],
    declarations: [QueueWithCommentComponent],
    entryComponents: [
        QueueWithCommentComponent
    ]
})
export class QueueWithCommentModule { }
