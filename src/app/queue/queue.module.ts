import { SharedModule } from '../shared/index';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { QueueComponent } from './queue.component';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        MatProgressSpinnerModule
    ],
    exports: [QueueComponent],
    declarations: [QueueComponent]
})
export class QueueModule { }
