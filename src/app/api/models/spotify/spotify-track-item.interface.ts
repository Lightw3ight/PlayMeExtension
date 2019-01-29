import { ISpotifyTrack } from './spotify-track.interface';

export interface ISpotifyTrackItem {
    added_at: string;
    track: ISpotifyTrack;
}
