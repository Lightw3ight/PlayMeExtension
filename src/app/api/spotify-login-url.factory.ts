import { ISpotifyConfig } from './models/spotify';

export function spotifyLoginUrlFactory (config: Partial<ISpotifyConfig>): string {
    const params = {
        client_id: config.clientId,
        redirect_uri: (config && config.redirectUri) || config.redirectUri,
        scope: config.scope || '',
        response_type: 'token'
    };

    return 'https://accounts.spotify.com/authorize?' + toQueryString(params);
}

function toQueryString (obj: Object): string {
  const parts = [];
  for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
          parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
      }
  }
  return parts.join('&');
}
