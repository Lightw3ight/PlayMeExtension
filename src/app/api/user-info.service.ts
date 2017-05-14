import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface IUserInfo {
    name: string,
    userId: string
}

@Injectable()
export class UserInfoService {
    guessWhoUrl = 'http://guesswho/EmployeeData.ashx';
    private users: Observable<IUserInfo[]>;

    constructor(private _http: Http) {

    }

    parseUserId(userId: string): string {
        if (!userId || userId === 'Autoplay') {
            return null;
        }

        return userId.replace('TRADEME\\', '');
    }

    getUserFullName(userId: string): Observable<string> {
        if (!userId || userId === 'Autoplay') {
            return Observable.of(userId);
        }

        userId = this.parseUserId(userId);

        return this.getAllUsers().map(users => {
            const user = users.find(u => u.userId === userId);
            return user ? user.name : userId;
        });
    }

    getAllUsers(): Observable<IUserInfo[]> {
        const result = this.users || (this.users = this._http.get(this.guessWhoUrl)
            .map(response => {
                return <IUserInfo[]>response.json();
            })
            .catch(this.handleError));

        return result;
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
