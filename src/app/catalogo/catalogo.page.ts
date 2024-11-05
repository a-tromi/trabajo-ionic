import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; 
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  comics = [
    { nombre: 'DCSOS: La Guerra de Los Dioses', img: './assets/img/LaGuerraDeLosDiosesNoMuertos.jpg', desc: "lorem ipsum dolor..."},
    { nombre: 'Batman y Robin: El Amanacer de DC', img: './assets/img/BatmanyRobin_1_ElAmanecerdeDC.jpg', desc: "lorem ipsum dolor..." },
    { nombre: 'El Pingüino núm. 1', img: './assets/img/ElPinguino_1.jpg', desc: "lorem ipsum dolor..."},
    { nombre: 'El Pingüino núm. 2',img: './assets/img/ElPinguino_2.jpg', desc: "lorem ipsum dolor..." }
  ];

  constructor(private navCtrl: NavController, private menu: MenuController) { }

  ngOnInit() {
    this.menu.close("mainMenu");
  }

  verDetalle(comic: {nombre: string, img: string, desc: string}) {
    this.navCtrl.navigateForward(['/detalle-comic'], {
      queryParams: {
        nombre: comic.nombre,
        img: comic.img,
        desc: comic.desc
      }
    });
  }

}
