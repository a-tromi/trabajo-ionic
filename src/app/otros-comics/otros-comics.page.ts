import { Component, OnInit } from '@angular/core';
import { OtrosComicsPageModule } from './otros-comics.module';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-otros-comics',
  templateUrl: './otros-comics.page.html',
  styleUrls: ['./otros-comics.page.scss'],
})
export class OtrosComicsPage implements OnInit {

  comics: any[] = [];

  constructor(private otrosComicsPageModule: OtrosComicsPageModule, private menu: MenuController, 
    private alertController: AlertController) { 

    }

  ngOnInit() {

    this.menu.close("mainMenu");
    this.otrosComicsPageModule.getComics().subscribe(
      (response) => {
        this.comics = response.data.results;
      },
      (error) => {
        this.mostrarAlerta(error);
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
