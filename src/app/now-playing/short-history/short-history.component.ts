import { Component, OnInit } from '@angular/core';
import { IQueuedTrack } from 'app/api/models';
import { SignalRService } from 'app/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'pm-short-history',
  templateUrl: './short-history.component.html',
  styleUrls: ['./short-history.component.scss']
})
export class ShortHistoryComponent implements OnInit {

  public trackHistory$: Observable<IQueuedTrack[]>;

  constructor (
    private _signalRService: SignalRService,

  ) { }

  ngOnInit () {
    this.trackHistory$ = this._signalRService.getRecentlyPlayed();

  }

  public trackByFn (index: number, item: IQueuedTrack) {
    return item.Id;
}

}
