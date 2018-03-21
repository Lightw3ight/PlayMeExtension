import { Component, OnInit, Input } from '@angular/core';
import { IPlaylist } from '../../models';

@Component({
    selector: 'pm-playlist-list-item',
    templateUrl: './playlist-list-item.component.html',
    styleUrls: [
        '../../shared/track-item/track-item.scss',
        './playlist-list-item.component.scss'
    ]
})
export class PlaylistListItemComponent {
    @Input() playlist: IPlaylist;

    public get playlistImage () {
        return this.playlist.ImageUrls.length ? this.playlist.ImageUrls[0] : null;
    }
}
