import { Component, OnInit, ElementRef, HostBinding, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { VerticalPosition } from './vertical-position.enum';
import { HorizontalPosition } from './horizontal-position.enum';

@Component({
    selector: 'pm-tooltip',
    templateUrl: 'tooltip.component.html',
    styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnDestroy, OnChanges {
    @Input() public position: string;
    // @HostBinding('class.isActive') public isActive = false;

    // @HostBinding('style.top') public get top (): string {
    //     return `${this.getTop()}px`;
    // }

    // @HostBinding('style.left') public get left (): string {
    //     return `${this.getLeft()}px`;
    // }

    private _host: ElementRef;
    private _vertPos = VerticalPosition.bottom;
    private _hozPos = HorizontalPosition.middle;

    constructor (
        private _el: ElementRef
    ) { }

    public ngOnDestroy () {
        const el: HTMLElement = this._el.nativeElement;
        el.remove();
    }

    ngOnChanges (changes: SimpleChanges): void {
        if (changes.position) {
            if (this.position) {
                const [vert, hoz] = this.position.split(' ');
                this._vertPos = VerticalPosition[vert];
                this._hozPos = HorizontalPosition[hoz];
            }
        }
    }

    public show (host: ElementRef) {
        window.document.body.appendChild(this._el.nativeElement);
        this._host = host;
        this.setPosition();
    }

    public hide () {
        const el: HTMLElement = this._el.nativeElement;
        el.className = '';
    }

    private setPosition () {
        const el: HTMLElement = this._el.nativeElement;
        el.classList.add(`pos-hoz-${HorizontalPosition[this._hozPos]}`);
        el.classList.add(`pos-vert-${VerticalPosition[this._vertPos]}`);
        el.classList.add('isActive');

        console.log(window.scrollY);

        el.style.top = `${this.getTop()}px`;
        el.style.left = `${this.getLeft()}px`;
    }

    private getTop (): number {
        const el: HTMLElement = this._el.nativeElement;

        if (!el || !el.offsetHeight || !this._host) {
            return 0;
        }

        const host: HTMLElement = this._host.nativeElement;
        const hostBounds = host.getBoundingClientRect();
        const hostTop = hostBounds.top + window.scrollY;

        switch (this._vertPos) {
            case VerticalPosition.top:
                return hostTop - el.offsetHeight;
            case VerticalPosition.middle:
                return (hostTop + (hostBounds.height / 2)) - (el.offsetHeight / 2);
            case VerticalPosition.bottom:
                return hostTop + hostBounds.height;
            default:
                return 0;
        }
    }

    private getLeft (): number {
        const el: HTMLElement = this._el.nativeElement;

        if (!el || !el.offsetWidth || !this._host) {
            return 0;
        }

        const host: HTMLElement = this._host.nativeElement;
        const hostBounds = host.getBoundingClientRect();

        switch (this._hozPos) {
            case HorizontalPosition.left:
                return hostBounds.left - el.offsetWidth;
            case HorizontalPosition.middle:
                return (hostBounds.left + (hostBounds.width / 2)) - (el.offsetWidth / 2);
            case HorizontalPosition.right:
                return hostBounds.left;
            default:
                return 0;
        }
    }
}
