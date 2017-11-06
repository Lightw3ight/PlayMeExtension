import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/combineLatest';

export const VETO_COUNT_KEY = 'karma-veto-count';
export const LIKE_COUNT_KEY = 'karma-like-count';

@Injectable()
export class KarmaService {
    private karmaKey = 'play-me-karma';
    private _vetoCount: BehaviorSubject<number>;
    private _likeCount: BehaviorSubject<number>;

    constructor () {
        this._likeCount = new BehaviorSubject(this.getValue(LIKE_COUNT_KEY));
        this._vetoCount = new BehaviorSubject(this.getValue(VETO_COUNT_KEY));

        this._likeCount.subscribe(newValue => {
            localStorage.setItem(LIKE_COUNT_KEY, `${newValue}`);
        });

        this._vetoCount.subscribe(newValue => {
            localStorage.setItem(VETO_COUNT_KEY, `${newValue}`);
        });
    }

    public addKarma () {
        this._likeCount.next(this._likeCount.value + 1);
    }

    public removeKarma () {
        this._vetoCount.next(this._vetoCount.value + 1);
    }

    public getCurrentKarma (): Observable<number> {
        return Observable.combineLatest(
            this._likeCount,
            this._vetoCount
        ).pipe(
            map(([like, veto]) => {
                return like - veto;
            })
        );
    }

    private getValue (key: string) {
        const value = localStorage.getItem(key);
        return value === null ? 0 : +value;
    }
}
