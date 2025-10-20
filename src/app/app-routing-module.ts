import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { Player } from './player/player';
import { MediaControl } from './media-control/media-control';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
