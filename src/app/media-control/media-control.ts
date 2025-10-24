import { Component, Input } from '@angular/core';
import { Song } from '../interfaces/song';
import { MusicPlayerService } from '../services/music-player';

@Component({
  selector: 'app-media-control',
  templateUrl: './media-control.html',
  styleUrls: ['./media-control.css'],
  standalone: false
})
export class MediaControl {
  @Input() currentSong!: Song;
  
  constructor(private musicPlayerService: MusicPlayerService) {}
  
  nextSong() {
    this.musicPlayerService.nextSong();
  }
  
  previousSong() {
    this.musicPlayerService.previousSong();
  }
}