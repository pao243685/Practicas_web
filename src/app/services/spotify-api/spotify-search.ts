
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifySearchResponse } from '../../interfaces/spotify-search-response';

@Injectable({
  providedIn: 'root'
})
export class SpotifySearchService {
  
  constructor(private _http: HttpClient) {}

  searchTracks(query: string, token: string): Observable<SpotifySearchResponse> {
    const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=9`;
    
    return this._http.get<SpotifySearchResponse>(url, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  }
}