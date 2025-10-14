import { Component, Input } from '@angular/core';
import { Song } from '../interfaces/song';

@Component({
  selector: 'app-player',
  standalone: false,
  templateUrl: './player.html',
  styleUrls: ['./player.css']
})
export class Player {
  @Input() song!: Song;
  @Input() playlist: Song[] = [];
}
