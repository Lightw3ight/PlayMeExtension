import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
    OpinionButtonsComponent,
    QueuedTrackComponent,
    SimpleTrackListItemComponent,
    TrackListItemComponent,
    UserListComponent,
    FixedBackgroundComponent,
    QueueWithCommentComponent
} from './';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MaterialModule.forRoot(),
        FlexLayoutModule
    ],
    declarations: [
        OpinionButtonsComponent,
        QueuedTrackComponent,
        SimpleTrackListItemComponent,
        TrackListItemComponent,
        UserListComponent,
        FixedBackgroundComponent,
        QueueWithCommentComponent
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
    ],
    entryComponents: [
        QueueWithCommentComponent
    ]
})
export class SharedModule {

}
