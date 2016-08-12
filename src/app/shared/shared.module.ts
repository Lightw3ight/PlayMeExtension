import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';


import {
    BreadcrumbsComponent,
    DropdownDirective,
    DropdownMenuDirective,
    DropdownToggleDirective,
    OpinionButtonsComponent,
    QueueTrackButtonComponent,
    QueuedTrackComponent,
    SearchBarComponent,
    SimpleTrackListItemComponent,
    TabsetComponent,
    TabComponent,
    TrackListItemComponent,
    UserListComponent
    
} from './';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        BreadcrumbsComponent,
        DropdownDirective,
        DropdownMenuDirective,
        DropdownToggleDirective,
        OpinionButtonsComponent,
        QueueTrackButtonComponent,
        QueuedTrackComponent,
        SearchBarComponent,
        SimpleTrackListItemComponent,
        TabsetComponent,
        TabComponent,
        TrackListItemComponent,
        UserListComponent
    ],
    exports: [
        BreadcrumbsComponent,
        DropdownDirective,
        DropdownMenuDirective,
        DropdownToggleDirective,
        OpinionButtonsComponent,
        QueueTrackButtonComponent,
        QueuedTrackComponent,
        SearchBarComponent,
        SimpleTrackListItemComponent,
        TabsetComponent,
        TabComponent,
        TrackListItemComponent,
        UserListComponent
    ],
    providers:[
    ]
})
export class SharedModule {

}