import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogoPageRoutingModule } from './catalogo-routing.module';

import { CatalogoPage } from './catalogo.page';
import { CompanyNameComponent } from '../company-name/company-name.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogoPageRoutingModule,
    CompanyNameComponent
  ],
  declarations: [CatalogoPage]
})
export class CatalogoPageModule {}
