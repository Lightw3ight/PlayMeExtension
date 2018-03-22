export interface ISpotifyConfig {
    clientId: string;
    redirectUri: string;
    scope: string;
    getUserAuthToken: Function;
    apiBase?: string;
}
