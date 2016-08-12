import { Component, Input } from '@angular/core';
import {IArtist} from '../../models'

@Component({
  moduleId: module.id,
  selector: 'artist-list-item',
  templateUrl: 'artist-list-item.component.html',
  styleUrls: ['artist-list-item.component.css']
})
export class ArtistListItemComponent{
	@Input() artist: IArtist
}