import { AfterContentInit, Component, OnInit, signal } from '@angular/core';
import { Song } from './interfaces/song';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit, AfterContentInit{
  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    console.log("los inputs se han inicializado")
  }

  protected readonly title = signal('EXAMPLE_APP');

  constructor(){
    this.actualSong = this.getNextSongFromPlaylist();
  }

nextSongs: Song[] = [
   {
      name: "cancion por codigo",
      artist: "cancion 1",
      url_media: "https://picsum.photos/200",
      url_cover: "/media/song.mp3"
  },
   {
      name: "cancion por codigo 2",
      artist: "cancion 2",
      url_media: "https://picsum.photos/200",
      url_cover: "/media/song_2.mp3"
  },
  {
      name: "cancion por codigo 3",
      artist: "cancion 3",
      url_media: "https://picsum.photos/200",
      url_cover: "/media/song_3.mp3"
  },
  {
      name: "cancion por codigo 4",
      artist: "artista medio de codigo",
      url_media: "https://picsum.photos/200",
      url_cover: ""
  },
]
lastSongs: any[] = []
actualSong: any | undefined = undefined;
private audioElement!: HTMLAudioElement;




  ngAfterViewInit() {
    this.audioElement = document.getElementById('media') as HTMLAudioElement;
  }

  /*
 changeSong(value: boolean){
  if(value){
    this.lastSongs.push(this.actualSong);
    this.actualSong = this.nextSongs.pop();
  }else{
    this.nextSongs.push(this.actualSong);
    this.actualSong = this.lastSongs.pop();
  }
 
 if (this.audioElement && this.actualSong?.song) {
      this.audioElement.src = this.actualSong.song;
      this.audioElement.play();
    }
  }

*/



 changeSong(value: boolean){
  if(this.actualSong !== undefined){
    if(value){
      if(this.nextSongs.length == 0)
        return;

      this.lastSongs.push(this.actualSong);
    this.actualSong = this.nextSongs.pop();
    }else{
      if(this.lastSongs.length == 0)
        return;
    this.nextSongs.push(this.actualSong);
    this.actualSong = this.lastSongs.pop();
  }
  //renderizacion
  }else{
    alert("la cancion no se ha podido cargar")
  }

  }

getNextSongFromPlaylist(): Song{
  let possible_song = this.nextSongs.pop()
  if(possible_song !== undefined)
    return possible_song
  else{
    return{
      name: "cancion por codigo 3",
      artist: "cancion 3",
      url_media: "https://picsum.photos/200",
      url_cover: "/media/song_3.mp3"
    }
  }
}


getLastSongFromPlaylist(): Song{
  let possible_song = this.lastSongs.pop()
  if(possible_song !== undefined)
    return possible_song;
  else{
    return{
      name: "cancion por codigo 3",
      artist: "cancion 3",
      url_media: "https://picsum.photos/200",
      url_cover: "/media/song_3.mp3"
    }
}

}

  togglePlay(isPlaying: boolean) {
    if (!this.audioElement) return;
    if (isPlaying) {
      this.audioElement.play();
    } else {
      this.audioElement.pause();
    }
  }
  

}
