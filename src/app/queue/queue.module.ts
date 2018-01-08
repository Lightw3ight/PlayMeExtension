import { SharedModule } from '../shared/index';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { QueueComponent } from './queue.component';
import { MatProgressBarModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        MatProgressBarModule
    ],
    exports: [QueueComponent],
    declarations: [QueueComponent]
})
export class QueueModule { }
