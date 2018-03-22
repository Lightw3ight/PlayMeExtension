import { ISpotifyConfig } from './models/spotify';

export function spotifyLoginUrlFactory (config?: Partial<ISpotifyConfig>): string {
    const params = {
        client_id: this.config.clientId,
        redirect_uri: (config && config.redirectUri) || this.config.redirectUri,
        scope: this.config.scope || '',
        response_type: 'token'
    };

    return 'https://accounts.spotify.com/authorize?' + this.toQueryString(params);
}
