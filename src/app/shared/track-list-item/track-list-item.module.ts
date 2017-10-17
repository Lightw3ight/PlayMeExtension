import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TrackListItemComponent } from './track-list-item.component';
import { MatIconModule, MatMenuModule, MatButtonModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [TrackListItemComponent],
    declarations: [TrackListItemComponent],
})
export class TrackListItemModule { }
