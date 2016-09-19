import {Component, Input, ViewEncapsulation} from '@angular/core';

import {IVeto} from '../../models/IVeto';
import {ILike} from '../../models/ILike';

@Component({
	selector: 'user-list',
	templateUrl: 'user-list.component.html',
	styleUrls: [
		'user-list.component.css'
	],
	encapsulation: ViewEncapsulation.None
})
export class UserListComponent {
	@Input() opinions: IVeto[] | ILike[];
	@Input() title: string;
}