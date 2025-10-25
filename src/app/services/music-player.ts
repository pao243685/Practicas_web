// services/music-player.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Song } from '../interfaces/song';

@Injectable({
  providedIn: 'root'
})
export class MusicPlayerService {
  private currentSongSubject = new BehaviorSubject<Song | null>(null);
  private playlistSubject = new BehaviorSubject<Song[]>([]);
  private currentIndexSubject = new BehaviorSubject<number>(0);
  
  currentSong$ = this.currentSongSubject.asObservable();
  playlist$ = this.playlistSubject.asObservable();
  currentIndex$ = this.currentIndexSubject.asObservable();
  
  setCurrentSong(song: Song) {
    this.currentSongSubject.next(song);
  }
  
  setPlaylist(playlist: Song[]) {
    this.playlistSubject.next(playlist);
  }
  
  setCurrentIndex(index: number) {
    this.currentIndexSubject.next(index);
    const playlist = this.playlistSubject.value;
    if (playlist[index]) {
      this.currentSongSubject.next(playlist[index]);
    }
  }
  
  nextSong() {
    const playlist = this.playlistSubject.value;
    const currentIndex = this.currentIndexSubject.value;
    
    if (currentIndex < playlist.length - 1) {
      this.setCurrentIndex(currentIndex + 1);
    } else {
      this.setCurrentIndex(0);
    }
  }
  
  previousSong() {
    const playlist = this.playlistSubject.value;
    const currentIndex = this.currentIndexSubject.value;
    
    if (currentIndex > 0) {
      this.setCurrentIndex(currentIndex - 1);
    } else {
      this.setCurrentIndex(playlist.length - 1);
    }
  }
  
  getCurrentSong(): Song | null {
    return this.currentSongSubject.value;
  }
  
  getPlaylist(): Song[] {
    return this.playlistSubject.value;
  }
  
  getCurrentIndex(): number {
    return this.currentIndexSubject.value;
  }
}