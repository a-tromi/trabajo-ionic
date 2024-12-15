import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesPage } from './clientes.page';
import { RouterTestingModule } from '@angular/router/testing';

const routes: Routes = [
  {
    path: '',
    component: ClientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterTestingModule],
  exports: [RouterModule],
})
export class ClientesPageRoutingModule {}
