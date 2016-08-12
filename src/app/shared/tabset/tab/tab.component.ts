import { Component, Input, Output, EventEmitter, OnInit, ElementRef, ContentChild } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tab',
  templateUrl: 'tab.component.html',
  styleUrls: ['tab.component.css']
})
export class TabComponent {
    private _active: boolean;

    @Input() disabled: boolean;
    @Input() heading: string;
    @Input() public get active(): boolean {
        return this._active;
    };
    public set active(value: boolean) {
        this._active = value;
        if (value) {
            this.select.emit(null);
        } else {
            this.deselect.emit(null);
        }
    };
    @Output() public select = new EventEmitter<any>();
    @Output() public deselect = new EventEmitter<any>();
}
