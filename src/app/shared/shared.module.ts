import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

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
    providers:[
    ]
})
export class SharedModule {

}