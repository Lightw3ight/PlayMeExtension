import { UserListModule } from '../user-list/user-list.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OpinionButtonsComponent } from './opinion-buttons.component';
import { MatIconModule, MatButtonModule, MatTooltipModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        UserListModule,
        MatTooltipModule
    ],
    exports: [OpinionButtonsComponent],
    declarations: [OpinionButtonsComponent]
})
export class OpinionButtonsModule { }
