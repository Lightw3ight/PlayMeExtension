import { Observable } from 'rxjs/Observable';

export interface ILike {
    ByUser: string;
    fullName: Observable<string>;
    userPhotoUrl: string;
    url: string;
}
