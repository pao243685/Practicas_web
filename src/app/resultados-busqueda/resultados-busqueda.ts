import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Song } from '../interfaces/song';
import { MusicPlayerService } from '../services/music-player';

@Component({
  selector: 'app-resultados-busqueda',
  standalone: false,
  templateUrl: './resultados-busqueda.html',
  styleUrl: './resultados-busqueda.css'
})
export class ResultadosBusqueda implements OnInit {
  resultados: Song[] = [];
  searchQuery: string = '';

  constructor(
    private router: Router,
    private musicPlayerService: MusicPlayerService
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.resultados = navigation.extras.state['results'] || [];
      this.searchQuery = navigation.extras.state['query'] || '';
    }
  }

  ngOnInit() {
    console.log('Resultados recibidos:', this.resultados);
    console.log('Búsqueda:', this.searchQuery);
  }

  selectSong(song: Song) {
   
    const currentPlaylist = this.musicPlayerService.getPlaylist();
    const newPlaylist = [...currentPlaylist, song];
    
    this.musicPlayerService.setPlaylist(newPlaylist);
    this.musicPlayerService.setCurrentIndex(currentPlaylist.length);
    
   
    this.router.navigate(['/']);
  }
}