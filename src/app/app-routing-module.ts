import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { Player } from './player/player';
import { MediaControl } from './media-control/media-control';
import { Buscador } from './buscador/buscador';
import { ResultadosBusqueda } from './resultados-busqueda/resultados-busqueda';

const routes: Routes = [
  {
    path:'',
    component:Player,
    title: 'PLayer Music'
  },
  {
    path:'controller',
    component: MediaControl,
    title: 'Player music'
  },
  {
    path:'view',
    loadChildren: () => import('./test/test-module').then(m => m.TestModule)
  },
  {
     path:'buscador',
    component: Buscador,
    title: 'Player music'
  },
  {
    path:'resultados-busqueda',
    component: ResultadosBusqueda,
    title: 'Resultados de Búsqueda'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
