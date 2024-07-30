import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicPagesComponent } from './pages/basic-pages/basic-pages.component';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';
import { SwitchesPagesComponent } from './pages/switches-pages/switches-pages.component';


@NgModule({
  declarations: [
    BasicPagesComponent,
    DynamicPageComponent,
    SwitchesPagesComponent],
  imports: [
    CommonModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }