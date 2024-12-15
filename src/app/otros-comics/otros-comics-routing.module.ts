import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtrosComicsPage } from './otros-comics.page';

const routes: Routes = [
  {
    path: '',
    component: OtrosComicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtrosComicsPageRoutingModule {}
