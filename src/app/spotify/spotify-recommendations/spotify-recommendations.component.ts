import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'app/api';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'pm-spotify-recommendations',
  templateUrl: './spotify-recommendations.component.html',
  styleUrls: ['./spotify-recommendations.component.scss']
})
export class SpotifyRecommendationsComponent implements OnInit {

  public recommendedTracks$;
  public trackDetail$;

  constructor (
    private _route: ActivatedRoute,
    private _spotifyService: SpotifyService
  ) { }

  ngOnInit () {

    this.recommendedTracks$ = this._route.paramMap.pipe(
      map(paramMap => paramMap.get('trackId')),
      switchMap(trackId => this._spotifyService.getRecommendationsForTrack(trackId))
    );

    this.trackDetail$ = this._route.paramMap.pipe(
      map(paramMap => paramMap.get('trackId')),
      switchMap(trackId => this._spotifyService.getTrack(trackId))
    );
  }

}
