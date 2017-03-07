import { Component, Input } from '@angular/core';
import { IArtist } from '../../models';

@Component({
    selector: 'pm-artist-list-item',
    templateUrl: 'artist-list-item.component.html',
    styleUrls: ['artist-list-item.component.scss']
})
export class ArtistListItemComponent {
    @Input() artist: IArtist;
}
