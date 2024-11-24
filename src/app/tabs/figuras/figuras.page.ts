import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-figuras',
  templateUrl: './figuras.page.html',
  styleUrls: ['./figuras.page.scss'],
})
export class FigurasPage {

  constructor() { }

  figuras = [
    {
      nombre: 'Batman & Ace',
      descripcion: 'Esta figura de Batman está basada en los cómics de la edad de plata de DC Comics. Incluye 4 manos intercambiables, un batarang, una figura de Ace the Bat-Hund y un stand de exhibición.',
      imagen: '/assets/img/catalogo/batman-ace.jpg',
    },

    {
      nombre: 'The Joker by Jason Fabok',
      descripcion: 'Esta estatua de Joker está inspirada en el arte de Jason Fabok, mide aproximadamente 12 pulgadas de alto e incluye un código para canjear un coleccionable McFarlane Digital.',
      imagen: '/assets/img/catalogo/joker.jpg',
    },

    {
      nombre: 'Wonder Woman by Jim Lee 1:6 Scale Statue',
      descripcion: 'Esta estatua de Wonder Woman en escala 1:6 está inspirada en el arte de Jim Lee e incluye un código para desbloquear una versión McFarlane Digital de la estatua.',
      imagen: '/assets/img/catalogo/wonder-woman.jpg',
    },

    {
      nombre: 'Batman vs. Bane "Batman: Knightfall"',
      descripcion: 'Basado en el exitoso cómic "Batman: Knightfall", este 2-pack de McFarlane Toys incluye las figuras de Batman y Bane, incluye accesorios y dos bases de exposición estándar y 2 tarjetas artísticas coleccionables con la fotografía de la figura en el anverso y la biografía del personaje en el reverso.',
      imagen: '/assets/img/catalogo/batman-bane.jpg',
    },
  
  ];

}
