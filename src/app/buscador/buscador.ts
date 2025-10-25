import { Component } from '@angular/core';
import { parseSpotifySearch } from '../interfaces/song';
import { Router } from '@angular/router';
import { SpotifySearchService } from '../services/spotify-api/spotify-search';
import { CookieStorageService } from '../services/cookie-storage-service';

@Component({
  selector: 'app-buscador',
  standalone: false,
  templateUrl: './buscador.html',
  styleUrl: './buscador.css'
})
export class Buscador {

  searchTerm: string = '';
  
  constructor(
    private router: Router,
    private spotifySearchService: SpotifySearchService,
    private cookieStorageService: CookieStorageService
  ) {}
  
  onSearch() {
    if (this.searchTerm.trim() === '') {
      return;
    }

    const token = this.cookieStorageService.getCookieValue('access_token');
    
    if (!token) {
      console.error('No hay token disponible');
      return;
    }

    this.spotifySearchService.searchTracks(this.searchTerm, token).subscribe({
      next: (response) => {
        console.log('Resultados de búsqueda:', response);
        const songs = parseSpotifySearch(response);
        
      
        this.router.navigate(['/resultados-busqueda'], {
          state: { results: songs, query: this.searchTerm }
        });
      },
      error: (error) => {
        console.error('Error en la búsqueda:', error);
      }
    });
  }
}