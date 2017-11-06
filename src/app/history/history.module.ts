import { SharedModule } from '../shared';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HistoryComponent } from './history.component';
import { MatTabsModule, MatProgressBarModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        MatTabsModule,
        MatProgressBarModule
    ],
    exports: [HistoryComponent],
    declarations: [HistoryComponent]
})
export class HistoryModule { }
