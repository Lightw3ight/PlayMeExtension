import { Observable } from 'rxjs/Observable';

export interface IVeto {
    ByUser: string;
    fullName: Observable<string>;
    userPhotoUrl: string;
    url: string;
}
