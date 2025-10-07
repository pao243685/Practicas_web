import { Component, computed, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-song',
  standalone: false,
  templateUrl: './info-song.html',
  styleUrl: './info-song.css'
})
export class InfoSong implements OnInit {
  ngOnInit(): void {
    console.log(this.song)
    alert("las  eentradas del componenete infosong se han iniciado")
  }


  constructor(){
    alert("el componenete infosong se han creado")
    console.log(this.song)
  }

  @Input({required: true})
  song: any;

  /*
  song_input = input();
  song = computed(() => this.song_input);
  */
  /*

  constructor(){
    this.song = {
      name: "cancion por codigo",
      artist: "artista medio de codigo",
      url: "https://picsum.photos/200"
    };
  }

  */
}


