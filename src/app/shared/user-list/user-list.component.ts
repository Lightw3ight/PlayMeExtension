import { Component, Input, ViewEncapsulation } from '@angular/core';

import { IVeto } from '../../models/IVeto';
import { ILike } from '../../models/ILike';

@Component({
    selector: 'pm-user-list',
    templateUrl: 'user-list.component.html',
    styleUrls: [ 'user-list.component.scss' ]
})
export class UserListComponent {
    @Input() public opinions: IVeto[] | ILike[];
    @Input() public title: string;
}
