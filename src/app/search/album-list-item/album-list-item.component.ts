import { Component, OnInit, Input } from '@angular/core';
import { IAlbum } from '../../api/models';

@Component({
    selector: 'pm-album-list-item',
    templateUrl: 'album-list-item.component.html',
    styleUrls: ['album-list-item.component.scss']
})
export class AlbumListItemComponent {
    @Input() album: IAlbum;
}
