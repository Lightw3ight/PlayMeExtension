import { Component, OnInit, Input } from '@angular/core';
import {IAlbum} from '../../models';

@Component({
  moduleId: module.id,
  selector: 'album-list-item',
  templateUrl: 'album-list-item.component.html',
  styleUrls: ['album-list-item.component.css']
})
export class AlbumListItemComponent{
	@Input() album: IAlbum;
}