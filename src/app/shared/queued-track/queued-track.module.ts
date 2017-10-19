import { FlexLayoutModule } from '@angular/flex-layout';
import { UserListModule } from '../user-list/user-list.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { QueuedTrackComponent } from './queued-track.component';
import { MatIconModule, MatMenuModule, MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        UserListModule,
        FlexLayoutModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule
    ],
    exports: [QueuedTrackComponent],
    declarations: [QueuedTrackComponent]
})
export class QueuedTrackModule { }
