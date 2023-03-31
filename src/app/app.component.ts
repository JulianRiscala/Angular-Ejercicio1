import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrimerosEjercicios';

  edad1:number = 0;
  edad2: number = 0;
  sumaEdades : number = 0;
  promedioEdades: number = 0;

  calcularDatos(){
    this.sumaEdades = this.edad1 + this.edad2;
    this.promedioEdades = (this.edad1 + this.edad2) / 2;
  }
}
