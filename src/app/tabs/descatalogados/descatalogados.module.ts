import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescatalogadosPageRoutingModule } from './descatalogados-routing.module';

import { DescatalogadosPage } from './descatalogados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescatalogadosPageRoutingModule
  ],
  declarations: [DescatalogadosPage]
})
export class DescatalogadosPageModule {}