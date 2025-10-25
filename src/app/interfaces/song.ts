export interface Song {
    name: string,
    artist: string,
    url_cover: string,
    url_media: string
    

}

import { SpotifyPlaylistResponse } from './spotify-playlist-response';
import { SpotifyTrackResponse } from './spotify-track-response';
import { SpotifySearchResponse } from './spotify-search-response';

export function parseSpotifyPlaylist(playlistResponse: SpotifyPlaylistResponse): Song[] {
  return playlistResponse.tracks.items.map(item => {
    const track: SpotifyTrackResponse = item.track;
    const artistNames = track.artists.map(a => a.name).join(', ');

    return {
      name: track.name,
      artist: artistNames,
      url_cover: playlistResponse.images[0]?.url || '',
      url_media: track.preview_url || '' 
    } as Song;
  });
}

export function parseSpotifySearch(searchResponse: SpotifySearchResponse): Song[] {
  return searchResponse.tracks.items.map(track => {
    const artistNames = track.artists.map(a => a.name).join(', ');

    return {
      name: track.name,
      artist: artistNames,
      url_cover: track.album?.images[0]?.url || '',
      url_media: track.preview_url || ''
    } as Song;
  });
}