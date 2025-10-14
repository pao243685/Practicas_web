import { Component, OnInit } from '@angular/core';
import { SpotifyLoginService } from './services/spotify-api/spotify-login-service';
import { SpotifyPlaylistService } from './services/spotify-api/spotify-playlist-service';
import { Song, parseSpotifyPlaylist } from './interfaces/song';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: false
})
export class App implements OnInit {
  currentSong: Song = { name: '', artist: '', url_cover: '', url_media: '' };
  playlist: Song[] = [];

  constructor(
    private spotifyLogin: SpotifyLoginService,
    private spotifyPlaylist: SpotifyPlaylistService
  ) {}

  ngOnInit(): void {
  console.log('App initialized');

  this.spotifyLogin.getToken().subscribe((data) => {
    console.log('Token recibido:', data);



    
    const token = data.access_token;

    this.spotifyPlaylist.getPlaylist(token).subscribe((playlistResponse) => {
      console.log('Playlist recibida de Spotify:', playlistResponse);

      const songs = parseSpotifyPlaylist(playlistResponse);
      console.log('Canciones parseadas:', songs);

      this.currentSong = songs[0];
      this.playlist = songs;

      console.log('currentSong asignada:', this.currentSong);
      console.log('playlist asignada:', this.playlist);
    });
  });
}



}
