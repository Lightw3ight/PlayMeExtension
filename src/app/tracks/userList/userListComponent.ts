import {Component, Input, ViewEncapsulation} from '@angular/core';

import {IVeto} from '../../models/IVeto';
import {ILike} from '../../models/ILike';

@Component({
	selector: 'user-list',
	templateUrl: '/app/tracks/userList/userListComponent.html',
	styleUrls: [
		'app/tracks/userList/userListComponent.css'
	],
	encapsulation: ViewEncapsulation.None
})
export class UserListComponent {
	@Input() opinions: IVeto[] | ILike[];
	@Input() title: string;
}