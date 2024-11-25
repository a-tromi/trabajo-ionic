import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { FormatearFechaPipe } from '../pipes/formatear-fecha.pipe';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  providers: [FormatearFechaPipe] // Proveedor que permite usar el pipe
})
export class RegistroPage implements OnInit {

  // Variables del formulario
  nombre: any='';
  apellido: any='';
  usuario: any='';
  password: any='';
  selectedOption: any='';
  selectedDate: any='';
  registroStatus: string='';
  
  constructor(private menu: MenuController, private alertController: AlertController, private formatearFechaPipe: FormatearFechaPipe, private dataService: DataService) { }

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

  /*
  guardar() {

    const fechaFormateada = this.formatearFechaPipe.transform(this.selectedDate);

    if (this.nombre.trim() === '' || this.apellido.trim() === '') {
      this.presentAlert('Error: nombre y apellido vacios');
    } else {
      this.presentAlert('Datos Correctos  usuario:  '+this.nombre+' fecha nacimiento: '+fechaFormateada); 
    }
    
  }
  */

  guardar() {
    if (this.nombre.trim() === '' || this.apellido.trim() === '') {
      this.presentAlert('Error: nombre y apellido vacios');
    } else {
  
      //this.presentAlert('Datos Correctos  usuario:  '+this.nombre+' fecha nacimiento: '+this.selectedDate); 
      this.register() 
    }
  }

  // Función  que registra datos validados
  async register() {
    const success = await this.dataService.registerUser(
      this.nombre,
      this.apellido,
      this.usuario,
      this.password,
      this.selectedOption,
      this.selectedDate
    );
    this.registroStatus = success ? 'Registro exitoso' : 'Error al registrar';
    this.presentAlert(this.registroStatus);

  }
  
}
