import { Component, output } from '@angular/core';

@Component({
  selector: 'app-media-control',
  standalone: false,
  templateUrl: './media-control.html',
  styleUrl: './media-control.css'
})
export class MediaControl {

  song: any;
  isPlaying = output<boolean>();
  requestSong = output<boolean>();

  nextSong(){
    this.requestSong.emit(true);
  }

  lastSong(){
    this.requestSong.emit(false);
  }

  play(){
    this.isPlaying.emit(true);
  }

}
