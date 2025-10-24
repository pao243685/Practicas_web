import { Component, OnInit } from '@angular/core';
import { Song } from '../interfaces/song';
import { MusicPlayerService } from '../services/music-player';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player',
  standalone: false,
  templateUrl: './player.html',
  styleUrls: ['./player.css']
})
export class Player {
  song$: Observable<Song | null>;

  constructor(private musicPlayerService: MusicPlayerService) {
    this.song$ = this.musicPlayerService.currentSong$;
  }
}