import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SimpleTrackListItemComponent } from './simple-track-list-item.component';
import { MatIconModule, MatButtonModule, MatMenuModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        FlexLayoutModule
    ],
    exports: [SimpleTrackListItemComponent],
    declarations: [SimpleTrackListItemComponent],
})
export class SimpleTrackListItemModule { }
