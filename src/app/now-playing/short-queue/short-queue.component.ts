import { Component, OnInit } from '@angular/core';
import { IQueuedTrack } from 'app/api/models';
import { Observable } from 'rxjs';
import { SignalRService } from 'app/api';

@Component({
  selector: 'pm-short-queue',
  templateUrl: './short-queue.component.html',
  styleUrls: ['./short-queue.component.scss']
})
export class ShortQueueComponent implements OnInit {

  public trackQueue$: Observable<IQueuedTrack[]>;

  constructor (
    private _signalRService: SignalRService,
  ) { }

  ngOnInit () {
    this.trackQueue$ = this._signalRService.getNextUp();
  }

  public trackByFn (index: number, item: IQueuedTrack) {
    return item.Id;
  }

}
