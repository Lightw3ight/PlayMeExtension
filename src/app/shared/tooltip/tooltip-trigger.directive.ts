import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { TooltipComponent } from './tooltip.component';

@Directive({ selector: '[pmTooltipTrigger]' })
export class TooltipTriggerDirective {
    @Input('pmTooltipTrigger') tooltip: TooltipComponent;

    constructor (
        private _el: ElementRef
    ) { }

    @HostListener('mouseover', ['$event'])
    public onMouseOver (args: MouseEvent) {
        if (this.tooltip) {
            this.tooltip.show(this._el);
        }
    }

    @HostListener('mouseout', ['$event'])
    public onMouseOut (args: MouseEvent) {
        if (this.tooltip) {
            this.tooltip.hide();
        }
    }
}
