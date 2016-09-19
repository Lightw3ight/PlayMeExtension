import { Component, OnInit, Input, HostBinding, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from './tab';

@Component({
	selector: 'tabset',
	templateUrl: 'tabset.component.html',
	styleUrls: ['tabset.component.css']
})
export class TabsetComponent implements OnInit {

	@Input()
	public get vertical(): boolean { return this._vertical; };

	@Input()
	public get justified(): boolean { return this._justified; };

	@Input()
	public get type(): string { return this._type; };

	@HostBinding('class.tab-container') protected clazz: boolean = true;

	@ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

	public set vertical(value: boolean) {
		this._vertical = value;
		this.setClassMap();
	}

	public set justified(value: boolean) {
		this._justified = value;
		this.setClassMap();
	}

	public set type(value: string) {
		this._type = value;
		this.setClassMap();
	}

	private isDestroyed: boolean;
	private _vertical: boolean;
	private _justified: boolean;
	private _type: string;
	private classMap: any = {};

	public ngOnInit(): void {
		this.type = this.type !== 'undefined' ? this.type : 'tabs';
	}

    public ngAfterContentInit(){
        if (!this.tabs.some(t => t.active)){
            this.activate(this.tabs.first);
        }
    }

	private setClassMap(): void {
		this.classMap = {
			'nav-stacked': this.vertical,
			'nav-justified': this.justified,
			['nav-' + (this.type || 'tabs')]: true
		};
	}

    public activate(tab: TabComponent){
        this.tabs.forEach(t =>{
            t.active = t === tab;
        })
    }
}
