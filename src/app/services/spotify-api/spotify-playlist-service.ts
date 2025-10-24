import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpotifyPlaylistResponse } from '../../interfaces/spotify-playlist-response';
import { Observable } from 'rxjs';
import { CookieStorageService } from '../cookie-storage-service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyPlaylistService {
  
  constructor(
    private _http: HttpClient,
    private _cookieStorageService: CookieStorageService
  ) {}

  getPlaylist(token: string): Observable<SpotifyPlaylistResponse> {
    return this._http.get<SpotifyPlaylistResponse>('https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  }
}
