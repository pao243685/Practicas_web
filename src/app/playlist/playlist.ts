import { Component, Input} from '@angular/core';
import { Song } from '../interfaces/song';

@Component({
  selector: 'app-playlist',
  standalone: false,
  templateUrl: './playlist.html',
  styleUrls: ['./playlist.css']
})
export class Playlist {
    @Input() playlist: Song[] = [];
}
