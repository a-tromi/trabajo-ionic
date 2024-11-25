import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertirMoneda'
  //standalone: true// Aquí desabilitamos el standalone para que el pipe no sea independendiente y pueda usarse en varios lados 
})
export class ConvertirMonedaPipe implements PipeTransform {

  transform(value: number, tipoCambio: number=977): string {
    const precioConvertido = value * tipoCambio;
    return `$${precioConvertido.toFixed(0)} CLP`;; // Redondea a 0 decimales
  }

}
