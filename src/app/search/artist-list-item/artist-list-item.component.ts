import { Component, Input } from '@angular/core';
import {Router, ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';
import {IArtist} from '../../models'

@Component({
  moduleId: module.id,
  selector: 'artist-list-item',
  templateUrl: 'artist-list-item.component.html',
  styleUrls: ['artist-list-item.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ArtistListItemComponent{
	@Input() artist: IArtist
}