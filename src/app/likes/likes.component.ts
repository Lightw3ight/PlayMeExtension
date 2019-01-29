import { IQueuedTrack, ITrack } from '../api/models';
import { QueueService } from '../api';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';

@Component({
    selector: 'pm-likes',
    templateUrl: 'likes.component.html'
})
export class LikesComponent implements OnInit {
    public likes$: Observable<ITrack[]>;
    public loading = true;

    constructor (
        private _queueService: QueueService
    ) { }

    public ngOnInit () {
        this.likes$ = this._queueService.getMyLikes().pipe(
            map(data => data.PageData),
            tap(() => {
                this.loading = false;
            }));
    }

    public trackByFn (index: number, track: ITrack): number {
        return index;
    }
}
