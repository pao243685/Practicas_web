import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpotifyPlaylistResponse } from '../../interfaces/spotify-playlist-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyPlaylistService {
  
  constructor(
    private _http: HttpClient
  ){
  }

  getPlaylist(token: string): Observable<SpotifyPlaylistResponse> {
    return this._http.get<SpotifyPlaylistResponse>(`https://api.spotify.com/v1/playlists/${token}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
