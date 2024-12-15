import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-otros-comics',
  templateUrl: './otros-comics.page.html',
  styleUrls: ['./otros-comics.page.scss'],
})
export class OtrosComicsPage implements OnInit {

  comics: any[] = [];

  constructor(private apiService: ApiService, private menu: MenuController, private alertController: AlertController) { }

  ngOnInit() {

    this.menu.close("mainMenu");
    this.apiService.getComics().subscribe(
      (response) => {
        this.comics = response.data.results; //almacena los datos retornados por la API de marvel en la variable "comics"
      },
      (error) => {
        this.mostrarAlerta(error); //los errores se manejan mostrandolos en un alert
      }
    );
  }

  async mostrarAlerta(mensaje:any) {
    const alert = await this.alertController.create({
      header: 'Mi app',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

}
