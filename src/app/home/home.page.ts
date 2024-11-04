import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   // Array de productos (drones)
   comics = [
    { nombre: 'DCSOS: La Guerra de Los Dioses', precio: 999, img: './assets/img/LaGuerraDeLosDiosesNoMuertos.jpg', descripcion: '¡La epidemia se extiende! Los héroes de la antigua Tierra han conseguido curar el virus...', enStock: false },
    { nombre: 'Batman y Robin: El Amanacer de DC', precio: 1499, img: './assets/img/BatmanyRobin_1_ElAmanecerdeDC.jpg', descripcion: '¡El Amanecer de DC sigue aquí! ¡Nueva serie! ¡Padre e hijo trabajando juntos de nuevo en este cómic creado por Joshua Williamson y...', enStock: true },
    { nombre: 'El Pingüino núm. 1', precio: 699, img: './assets/img/ElPinguino_1.jpg', descripcion: 'El Pingüino vuelve a su ciudad para tomar el control de una vez por todas. Y, para ello, ha tramado un plan maestro.' , enStock: false},
    { nombre: 'El Pingüino núm. 2', precio: 2999, img: './assets/img/ElPinguino_2.jpg', descripcion: 'Es el momento de reclamar el trono de Gotham City. Primera fase: ¡Reunión familiar!', enStock: false }
  ];

  constructor(private route: ActivatedRoute, private alertController: AlertController, private menu: MenuController) {}
  email: string = '';
  password: string = '';

  bienvenida: string='Bienvenid@ Comiquer@';

  ngOnInit() {
    this.menu.close("mainMenu");
    // Obtener los parámetros de la URL
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      this.password = params['password'];
    });
  }

  // Método para mostrar alerta sobre el stock del producto
  async mostrarAlerta(comic:any) {
    const alert = await this.alertController.create({
      header: 'Estado del Producto',
      message: comic.enStock ? 'Producto Disponible' : 'Ya no queda stock :(',
      buttons: ['OK']
    });

    await alert.present();
  }

}
