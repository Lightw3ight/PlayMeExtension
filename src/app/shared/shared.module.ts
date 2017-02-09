import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ModalModule } from 'ng2-bootstrap/modal';

import {
    BreadcrumbsComponent,
    OpinionButtonsComponent,
    QueueTrackButtonComponent,
    QueuedTrackComponent,
    SearchBarComponent,
    SimpleTrackListItemComponent,
    TrackListItemComponent,
    UserListComponent

} from './';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        RouterModule,
        ModalModule,
        DropdownModule
    ],
    declarations: [
        BreadcrumbsComponent,
        OpinionButtonsComponent,
        QueueTrackButtonComponent,
        QueuedTrackComponent,
        SearchBarComponent,
        SimpleTrackListItemComponent,
        TrackListItemComponent,
        UserListComponent
    ],
    exports: [
        BreadcrumbsComponent,
        OpinionButtonsComponent,
        QueueTrackButtonComponent,
        QueuedTrackComponent,
        SearchBarComponent,
        SimpleTrackListItemComponent,
        TrackListItemComponent,
        UserListComponent
    ],
    providers: [
    ]
})
export class SharedModule {

}