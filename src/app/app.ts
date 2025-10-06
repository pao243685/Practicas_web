import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EXAMPLE_APP');
nextSongs: any[] = [
   {
      name: "cancion por codigo",
      artist: "cancion 1",
      url: "https://picsum.photos/200",
      song: "song.mp3"
  },
   {
      name: "cancion por codigo 2",
      artist: "cancion 2",
      url: "https://picsum.photos/200",
      song: "song_2.mp3"
  },
  {
      name: "cancion por codigo 3",
      artist: "cancion 3",
      url: "https://picsum.photos/200",
      song: "song_3.mp3"
  },
  {
      name: "cancion por codigo 4",
      artist: "artista medio de codigo",
      url: "https://picsum.photos/200"
  },
]
lastSongs: any[] = []
actualSong: any | undefined = undefined;


 changeSong(value: boolean){
  if(value){
    this.lastSongs.push(this.actualSong);
    this.actualSong = this.nextSongs.pop();
  }else{
    this.nextSongs.push(this.actualSong);
    this.actualSong = this.lastSongs.pop();
  }
 }

}
