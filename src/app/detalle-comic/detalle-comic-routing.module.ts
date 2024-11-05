import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleComicPage } from './detalle-comic.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleComicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleComicPageRoutingModule {}
