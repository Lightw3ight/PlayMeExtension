import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { LikesComponent } from './likes.component';
import { MatProgressBarModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        MatProgressBarModule
    ],
    declarations: [LikesComponent],
    exports: [LikesComponent],
})
export class LikesModule { }
