import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view-component/view-component';
import { ChildTest } from './child-test/child-test';
import { ChildTest2 } from './child-test2/child-test2';
import { StaticChild } from './static-child/static-child';
import { TestRoutingModule } from './test-routing-module';



@NgModule({
  declarations: [
    ViewComponent,
    ChildTest,
    ChildTest2,
    StaticChild
  ],
  imports: [
    CommonModule,
    TestRoutingModule

  ],exports: [
    ViewComponent
  ]
})
export class TestModule { }
