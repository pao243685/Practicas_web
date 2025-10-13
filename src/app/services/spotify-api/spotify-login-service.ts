import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyLoginService {


  constructor(
    private _http:HttpClient
  ){ }


  getToken(): Observable<any> {
    const body = new HttpParams()
      .set("grant_type","client_credentials")
      .set("client_id","d5115db075d248eb9771dced1334e2ac")
      .set("client_secret","dc9747fc1ba44f0eb202af405fc7d857")

    return this._http.post<any>("https://accounts.spotify.com/api/token", body.toString(),
    {
      headers: {'Content-Type': "application/x-www-form-urlencoded"}
    }
  );

  }
}
