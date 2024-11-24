import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage  {

  constructor() { }

  images: string[] = [
    '/assets/img/catalogo/galeria-1.jpg',
    '/assets/img/catalogo/galeria-2.jpg',
    '/assets/img/catalogo/galeria-3.jpg',
    '/assets/img/catalogo/galeria-4.jpg',
    '/assets/img/catalogo/galeria-5.jpg',
    '/assets/img/catalogo/galeria-6.jpg',       
   
  ];

}
