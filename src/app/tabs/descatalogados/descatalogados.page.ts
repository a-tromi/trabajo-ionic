import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-descatalogados',
  templateUrl: './descatalogados.page.html',
  styleUrls: ['./descatalogados.page.scss'],
})
export class DescatalogadosPage implements OnInit {

  constructor(private menu: MenuController) { }

  descatalogados = [
    {
      nombre: 'Batman Grendel de Matt Wagner',
      precio: 20.9,
      imagen: '/assets/img/catalogo/batman-grendel.jpg'
    },

    {
      nombre: 'Clasicos Marvel DC, Grandes Crossover del cómic',
      precio: 60.5,
      imagen: '/assets/img/catalogo/clasicos-marvel-dc.jpg'
    },

    {
      nombre: 'JLA de Mark Waid',
      precio: 110.5,
      imagen: '/assets/img/catalogo/clasicos-marvel-dc.jpg'
    },

    {
      nombre: 'Los mejores superhéroes del mundo',
      precio: 90.5,
      imagen: '/assets/img/catalogo/los-mejores-superheroes-del-mundo.jpg'
    },

    {
      nombre: 'Superman, Las historias de Alan Moore',
      precio: 41,
      imagen: '/assets/img/catalogo/superman-de-alan-moore.jpg'
    },


  ]

  ngOnInit() {
    this.menu.close('mainMenu');
  }

}
