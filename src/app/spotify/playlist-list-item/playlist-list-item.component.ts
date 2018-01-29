import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pm-playlist-list-item',
  templateUrl: './playlist-list-item.component.html',
  styleUrls: ['./playlist-list-item.component.scss']
})
export class PlaylistListItemComponent implements OnInit {
  @Input() playlist;

  constructor () {}

  ngOnInit () {}

  get playlistImage () {
    let images = this.playlist.images;
    if (!images
        || !images.length) {
        return null;
      }

      return images[images.length - 1].url;
  }
}