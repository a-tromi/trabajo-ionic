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

   // Array de cómics
   comics = [
    { nombre: 'DCSOS: La Guerra de Los Dioses', img: './assets/img/catalogo/LaGuerraDeLosDiosesNoMuertos.jpg', enStock: false },
    { nombre: 'Batman y Robin: El Amanacer de DC', img: './assets/img/BatmanyRobin_1_ElAmanecerdeDC.jpg', enStock: true },
    { nombre: 'El Pingüino núm. 1', img: './assets/img/ElPinguino_1.jpg', enStock: false},
    { nombre: 'El Pingüino núm. 2',img: './assets/img/ElPinguino_2.jpg', enStock: false }
  ];

  constructor(private route: ActivatedRoute, private alertController: AlertController, private menu: MenuController) {}
  email: string = '';

  bienvenida: string='Bienvenid@ Comiquer@'; // variable que interpolamos en el HTML

  ngOnInit() {
    this.menu.close("mainMenu"); // Esto hace que se cierre el toolbar cada vez que pincho Home
    // El ActiveRoute permite Obtener los parámetros de la URL
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];     
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
