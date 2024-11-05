import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuienesSomosPageRoutingModule } from './quienes-somos-routing.module';

import { QuienesSomosPage } from './quienes-somos.page';
import { CompanyNameComponent } from '../company-name/company-name.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuienesSomosPageRoutingModule,
    CompanyNameComponent
  ],
  declarations: [QuienesSomosPage]
})
export class QuienesSomosPageModule {}
