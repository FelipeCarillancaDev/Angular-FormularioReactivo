import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPagesComponent } from './pages/basic-pages/basic-pages.component';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';
import { SwitchesPagesComponent } from './pages/switches-pages/switches-pages.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: 'basic', component: BasicPagesComponent },
    { path: 'dynamic', component: DynamicPageComponent },
    { path: 'switches', component: SwitchesPagesComponent },
    { path: '**', redirectTo: 'basic' },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
