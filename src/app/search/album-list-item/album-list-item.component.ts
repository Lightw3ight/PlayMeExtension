import { Component, OnInit, Input } from '@angular/core';
import {Router, ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';
import {IAlbum} from '../../models';

@Component({
  moduleId: module.id,
  selector: 'album-list-item',
  templateUrl: 'album-list-item.component.html',
  styleUrls: ['album-list-item.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AlbumListItemComponent{
	@Input() album: IAlbum;
}