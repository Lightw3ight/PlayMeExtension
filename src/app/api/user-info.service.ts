import { publishReplay, refCount, startWith, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { IUserInfo } from './user-info.interface';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserInfoService {
    private _guessWhoUrl = 'http://guesswho/EmployeeData.ashx';
    private _users: Observable<IUserInfo[]>;

    constructor (
        private _http: HttpClient
    ) { }

    public parseUserId (userId: string): string {
        if (!userId || this.isAutoplay(userId)) {
            return null;
        }

        return userId.replace('TRADEME\\', '');
    }

    public getUserFullName (userId: string): Observable<string> {
        if (!userId || this.isAutoplay(userId)) {
            return of(userId);
        }

        userId = this.parseUserId(userId);

        return this.getAllUsers().pipe(
            map(users => {
                const user = users.find(u => u.userId === userId);
                return user ? user.name : userId;
            }),
            startWith(userId));
    }

    public getAllUsers (): Observable<IUserInfo[]> {
        if (!this._users) {
            this._users = this._http.get<IUserInfo[]>(this._guessWhoUrl).pipe(
                publishReplay(1),
                refCount(),
                catchError(error => of([])) // Default to empty user list if employee service is down
            );
        }

        return this._users;
    }

    private isAutoplay (userId: string): boolean {
        return !!userId && userId.startsWith('Autoplay');
    }
}
