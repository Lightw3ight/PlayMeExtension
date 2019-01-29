import { Component, Input, ViewEncapsulation } from '@angular/core';
import { IVeto, ILike } from '../../api/models';

@Component({
    selector: 'pm-user-list',
    templateUrl: 'user-list.component.html',
    styleUrls: [ 'user-list.component.scss' ]
})
export class UserListComponent {
    @Input() public opinions: IVeto[] | ILike[];
    @Input() public title: string;


    public trackByFn (index: number, item) {
        return index;
    }
}
