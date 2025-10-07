import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-media-control',
  standalone: false,
  templateUrl: './media-control.html',
  styleUrl: './media-control.css'
})
export class MediaControl {

  song: any;
   @Output() isPlaying = new EventEmitter<boolean>();
  @Output() requestSong = new EventEmitter<boolean>();

  playing: boolean = false;

  nextSong(){
    this.requestSong.emit(true);
  }

  lastSong(){
    this.requestSong.emit(false);
  }

  play(){
    this.playing = !this.playing;
    this.isPlaying.emit(this.playing);
  }

}
