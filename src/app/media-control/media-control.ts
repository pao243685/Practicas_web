import { Component, Input } from '@angular/core';
import { Song } from '../interfaces/song';

@Component({
  selector: 'app-media-control',
  templateUrl: './media-control.html',
  styleUrls: ['./media-control.css'],
  standalone: false
})
export class MediaControl {
  @Input() currentSong!: Song;
}
