import { Component, ViewEncapsulation } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, Router} from '@angular/router';
import { NowPlayingComponent } from './now-playing';
import {HTTP_PROVIDERS} from '@angular/http';
import { AlbumComponent } from './album';
import { SearchComponent } from './search';
import { ArtistComponent } from './artist';
import { QueueComponent } from './queue';
import { HistoryComponent } from './history';


import {SearchService} from './api/search.service';
import {ArtistService} from './api/artist.service';
import {AlbumService} from './api/album.service';
import {QueueService} from './api/queue.service';
import {AudioZoneService} from './api/audio-zone.service';
import {UserInfoService} from './api/user-info.service';
import {SignalRService} from './api/signalr.service';

@Component({
  moduleId: module.id,
  selector: 'play-me-extension-app',
  templateUrl: 'play-me-extension.component.html',
  styleUrls: ['play-me-extension.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HTTP_PROVIDERS,
    SearchService,
    ArtistService,
    AlbumService,
    QueueService,
    //Location,
    AudioZoneService,
    UserInfoService,
    SignalRService
  ]
})
@Routes([
  { path: '/', component: NowPlayingComponent },
  {path: '/album/:provider/:id', component: AlbumComponent},
  {path: '/search/:provider/:searchQuery', component: SearchComponent},
  {path: '/artist/:provider/:id', component: ArtistComponent},
  {path: '/queue', component: QueueComponent},
  {path: '/history', component: HistoryComponent}
])
export class PlayMeExtensionAppComponent {
  constructor(private router: Router) {

  }
  title = 'play-me-extension works!';
}
