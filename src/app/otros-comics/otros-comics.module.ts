import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtrosComicsPageRoutingModule } from './otros-comics-routing.module';

import { OtrosComicsPage } from './otros-comics.page';
import { CompanyNameComponent } from '../company-name/company-name.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtrosComicsPageRoutingModule,
    CompanyNameComponent
  ],
  declarations: [OtrosComicsPage]
})
export class OtrosComicsPageModule {}
