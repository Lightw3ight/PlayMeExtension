import {Directive, ElementRef, Host, OnInit, HostBinding} from '@angular/core';
import {DropdownDirective} from './dropdown.directive';

@Directive({
    selector: '[dropdownMenu]',
    exportAs: 'bs-dropdown-menu'
})
export class DropdownMenuDirective implements OnInit {
    public dropdown: DropdownDirective;
    public el: ElementRef;

    @HostBinding('class.dropdown-menu')
    public addClass: boolean = true;

    public constructor( @Host() dropdown: DropdownDirective, el: ElementRef) {
        this.dropdown = dropdown;
        this.el = el;
    }

    public ngOnInit(): void {
        this.dropdown.dropDownMenu = this;
    }
}