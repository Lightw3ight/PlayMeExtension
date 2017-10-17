import { ZoneSelectorModule } from '../zone-selector/zone-selector.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SideNavComponent } from './side-nav.component';
import { MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatIconModule,
        MatButtonModule,
        ZoneSelectorModule
    ],
    exports: [SideNavComponent],
    declarations: [SideNavComponent]
})
export class SideNavModule { }
