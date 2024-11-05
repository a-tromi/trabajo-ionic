import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleComicPageRoutingModule } from './detalle-comic-routing.module';

import { DetalleComicPage } from './detalle-comic.page';

import { CompanyNameComponent } from '../company-name/company-name.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleComicPageRoutingModule,
    CompanyNameComponent
  ],
  declarations: [DetalleComicPage]
})
export class DetalleComicPageModule {}
