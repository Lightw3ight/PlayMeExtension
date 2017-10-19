import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FixedBackgroundComponent } from './fixed-background.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [FixedBackgroundComponent],
    declarations: [FixedBackgroundComponent]
})
export class FixedBackgroundModule { }
