import { SharedModule } from '../shared/index';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HistoryComponent } from './history.component';
import { MatTabsModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        MatTabsModule,
        MatProgressSpinnerModule
    ],
    exports: [HistoryComponent],
    declarations: [HistoryComponent]
})
export class HistoryModule { }
