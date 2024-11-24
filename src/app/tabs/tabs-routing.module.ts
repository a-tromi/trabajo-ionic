import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,

    children:[ // con el children me aseguro de que las siguientes páginas sean sus hijas
      {
        path: 'descatalogados',
        loadChildren: () => import('./descatalogados/descatalogados.module').then( m => m.DescatalogadosPageModule)
      },
      {
        path: 'figuras',
        loadChildren: () => import('./figuras/figuras.module').then( m => m.FigurasPageModule)
      },
      {
        path: 'galeria',
        loadChildren: () => import('./galeria/galeria.module').then( m => m.GaleriaPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/descatalogados', // está será la pagina que mostrará por defecto el tab 
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
