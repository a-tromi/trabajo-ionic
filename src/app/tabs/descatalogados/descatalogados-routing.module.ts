import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescatalogadosPage } from './descatalogados.page';

const routes: Routes = [
  {
    path: '',
    component: DescatalogadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescatalogadosPageRoutingModule {}
