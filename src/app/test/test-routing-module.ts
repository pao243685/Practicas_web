import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { Player } from '../player/player';
import { ViewComponent } from './view-component/view-component';
import { ChildTest } from './child-test/child-test';
import { ChildTest2 } from './child-test2/child-test2';
import { MediaControl } from '../media-control/media-control';



const routes: Routes = [
  {
    path:'',
    component: ViewComponent,
    children:[
      {
        path: 'first-child',
        component: ChildTest

      },{
        path: 'second-child',
        component: ChildTest2

      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TestRoutingModule { }
