import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IonicModule } from '@ionic/angular';

import { OtrosComicsPageRoutingModule } from './otros-comics-routing.module';

import { OtrosComicsPage } from './otros-comics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtrosComicsPageRoutingModule
  ],
  declarations: [OtrosComicsPage]
})
@Injectable({
  providedIn: 'root'
})
export class OtrosComicsPageModule {

  private apiUrlGetComics = 'https://gateway.marvel.com:443/v1/public/comics?apikey=d9344d9be90304f1a51f747d22481c39&hash=ef54ca2f44f8715c283db790c6343f8d&ts=1';

  constructor(private http: HttpClient) { }

  // Método para obtener los cómics
  getComics(): Observable<any> {
    return this.http.get(this.apiUrlGetComics);
  }

 }
