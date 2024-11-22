import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  // Variables del formulario
  nombre: any='';
  apellido: any='';
  usuario: any='';
  password: any='';
  selectedOption: any='';
  selectedDate: any='';
  
  constructor(private menu: MenuController, private alertController: AlertController) { }

  ngOnInit() {
    this.menu.close("mainMenu"); // Esto hace que se cierre el toolbar cada vez que pincho "Registro"
    
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  guardar() {

    if (this.nombre.trim() === '' || this.apellido.trim() === '') {
      this.presentAlert('Error: nombre y apellido vacios');
    } else {
      this.presentAlert('Datos Correctos  usuario:  '+this.nombre+' fecha nacimiento: '+this.selectedDate); 
    }
    
  }
}
