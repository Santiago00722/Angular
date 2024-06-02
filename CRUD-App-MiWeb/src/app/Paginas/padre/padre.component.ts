import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent {

  dataPadre = "Mensaje escrito en el comp. PADRE"

  arregloColores = ['Verde','Amarillo','Rojo']

  agregarAlArreglo(NuevosValores: string){
    this.arregloColores.push(NuevosValores)
  }
}
