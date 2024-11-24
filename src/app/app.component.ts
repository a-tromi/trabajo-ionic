import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular'; // esto permite manejar la parte lógica del menú
import { Router } from '@angular/router' // esto me permite llamar a otras páginas


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController, private router: Router) {}

  cerrarSesion() {
    console.log('Sesión cerrada');
    this.menu.close('mainMenu'); // Esto cierra el menú
    this.router.navigate(['/login']);
  }
}


