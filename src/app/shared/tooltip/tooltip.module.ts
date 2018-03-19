import { NgModule } from '@angular/core';

import { TooltipComponent } from './tooltip.component';
import { TooltipTriggerDirective } from './tooltip-trigger.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        TooltipTriggerDirective,
        TooltipComponent
    ],
    declarations: [
        TooltipTriggerDirective,
        TooltipComponent
    ],
    providers: [],
})
export class TooltipModule { }
