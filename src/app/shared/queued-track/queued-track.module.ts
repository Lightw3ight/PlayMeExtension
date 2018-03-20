import { FlexLayoutModule } from '@angular/flex-layout';
import { UserListModule } from '../user-list/user-list.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { QueuedTrackComponent } from './queued-track.component';
import { MatIconModule, MatMenuModule, MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { TooltipModule } from '../tooltip/tooltip.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        UserListModule,
        FlexLayoutModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        TooltipModule
    ],
    exports: [QueuedTrackComponent],
    declarations: [QueuedTrackComponent]
})
export class QueuedTrackModule { }
