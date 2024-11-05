import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; 
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-comic',
  templateUrl: './detalle-comic.page.html',
  styleUrls: ['./detalle-comic.page.scss'],
})
export class DetalleComicPage implements OnInit {
  nombre: string = '';
  img: string = '';
  descripcion: string = '';

  constructor(private route: ActivatedRoute, private menu: MenuController, private navCtrl: NavController) { }

  ngOnInit() {
    this.menu.close("mainMenu");
    // Obtener los parámetros de la URL
    this.route.queryParams.subscribe(params => {
      this.nombre = params['nombre'];
      this.img = params['img'];
      this.descripcion = params['desc'];
    });
  }

  volver() {
    this.navCtrl.navigateForward(['/catalogo']);
  }

}
