import {Component, Input} from '@angular/core';

import {IVeto} from '../models/IVeto';
import {ILike} from '../models/ILike';

@Component({
	selector: 'user-list',
	templateUrl: '/app/tracks/userListComponent.html'
})
export class UserListComponent{
	@Input() opinions: IVeto[] | ILike[];
	@Input() title: string;
}