import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { InfoSong } from './info-song/info-song';
import { MediaControl } from './media-control/media-control';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { Playlist } from './playlist/playlist';
import { Player } from './player/player';
import { authInterceptor } from './interceptors/auth-interceptor';
import { Buscador } from './buscador/buscador';
import { ResultadosBusqueda } from './resultados-busqueda/resultados-busqueda';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    App,
    InfoSong,
    MediaControl,
    Playlist,
    Player,
    Buscador,
    ResultadosBusqueda

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterLink
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(
      withInterceptors([
        authInterceptor
      ])
    )
  ],
  bootstrap: [App]
})
export class AppModule { }
