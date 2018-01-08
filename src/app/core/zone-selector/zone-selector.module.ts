import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ZoneSelectorComponent } from './zone-selector.component';
import { MatRadioModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        MatRadioModule
    ],
    exports: [ZoneSelectorComponent],
    declarations: [ZoneSelectorComponent]
})
export class ZoneSelectorModule { }
