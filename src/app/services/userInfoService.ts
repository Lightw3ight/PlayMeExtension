import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

export interface IUserInfo{
	name: string,
	userId: string
}

@Injectable()
export class UserInfoService{
	guessWhoUrl = 'http://guesswho/EmployeeData.ashx';
	private users: Promise<IUserInfo>; 
	
	constructor(private _http: Http){
		
	}
	
	parseUserId(userId: string): string{
		if (!userId || userId === 'Autoplay'){
			return null;
		}
		
		return userId.replace('TRADEME\\', '');
	}
	
	getUserFullName(userId: string){
		if (!userId || userId === 'Autoplay'){
			return Promise.resolve(userId);
		}
		
		userId = this.parseUserId(userId);
		
		return this.getAllUsers().then(users =>{
			return users.find(u => u.userId === userId).name || userId;
		});
	}
	
	getAllUsers(): Promise<UserInfo>{
		var result = this.users || (this.users = this._http.get(this.guessWhoUrl)
			.map(response => {
				return <IUserInfo[]>response.json()
			})
			.toPromise()
			.catch(this.handleError));
			
		return result;
	}
	
	private handleError(error: Response){
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}