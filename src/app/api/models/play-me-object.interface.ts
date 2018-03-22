import {IMusicProvider} from './music-provider.interface';

export interface IPlayMeObject {
    Link: string;
    Name: string;
    ExternalLink: string;
    MusicProvider: IMusicProvider;
}
