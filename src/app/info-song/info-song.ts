import { Component, Input, input } from '@angular/core';
import { Song } from '../interfaces/song';

@Component({
  selector: 'app-info-song',
  standalone: false,
  templateUrl: './info-song.html',
  styleUrls: ['./info-song.css'],
  host: {
    '[class]': 'displayMode',
  },
})
export class InfoSong {
   @Input() displayMode: string = 'default';
  @Input() song!: Song;

}
