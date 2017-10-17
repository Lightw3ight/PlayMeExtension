import { FixedBackgroundModule } from './fixed-background/fixed-background.module';
import { OpinionButtonsModule } from './opinion-buttons/opinion-buttons.module';
import { QueueWithCommentModule } from './queue-with-comment/queue-with-comment.module';
import { UserListModule } from './user-list/user-list.module';
import { QueuedTrackModule } from './queued-track/queued-track.module';
import { SimpleTrackListItemModule } from './simple-track-list-item/simple-track-list-item.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
// import { FlexLayoutModule } from '@angular/flex-layout';

// import {
    // OpinionButtonsComponent,
    // QueuedTrackComponent,
    // SimpleTrackListItemComponent,
    // UserListComponent,
    // FixedBackgroundComponent,
    // QueueWithCommentComponent
// } from './';
import { TrackListItemModule } from './track-list-item/track-list-item.module';
import { TrackListItemComponent } from './track-list-item/track-list-item.component';
import { FixedBackgroundComponent } from './fixed-background/fixed-background.component';
import { OpinionButtonsComponent } from './opinion-buttons/opinion-buttons.component';
import { QueuedTrackComponent } from './queued-track/queued-track.component';
import { SimpleTrackListItemComponent } from './simple-track-list-item';
import { UserListComponent } from './user-list/user-list.component';
import { QueueWithCommentComponent } from './queue-with-comment/queue-with-comment.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        // FormsModule,
        // ReactiveFormsModule,
        // RouterModule,
        // FlexLayoutModule,
        TrackListItemModule,
        SimpleTrackListItemModule,
        QueuedTrackModule,
        UserListModule,
        QueueWithCommentModule,
        OpinionButtonsModule,
        FixedBackgroundModule
    ],
    declarations: [
        // OpinionButtonsComponent,
        // QueuedTrackComponent,
        // SimpleTrackListItemComponent,
        // UserListComponent,
        // FixedBackgroundComponent,
        // QueueWithCommentComponent
    ],
    exports: [
        OpinionButtonsComponent,
        QueuedTrackComponent,
        SimpleTrackListItemComponent,
        TrackListItemComponent,
        UserListComponent,
        FixedBackgroundComponent,
        QueueWithCommentComponent
    ],
    providers: [
    ]
    // entryComponents: [
    //     QueueWithCommentComponent
    // ]
})
export class SharedModule {

}
