import { Component, OnInit, Input } from '@angular/core';
import { DestinoViajeComponent } from '../destino-viaje/destino-viaje.component';
import { DestinoViaje } from './../models/destino-viaje.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinosPopulares: string[];
  destinos: DestinoViaje[];
  constructor() {
    this.destinosPopulares = ['Bogota', 'Medellin', 'Cali'];
    this.destinos = []; 
  }

  ngOnInit(): void {
  }

  guardar(nombre: string, url: string):boolean {
    this.destinos.push(new DestinoViaje(nombre, url));
    return false;
  }
  guardarPopular(d: DestinoViaje) {
    this.destinosPopulares.push(d.nombre);
  }

  elegido(d: DestinoViaje) {
    this.destinos.forEach(function (x) {
      x.setSelected(false);
    });
    this.guardarPopular(d);
    d.setSelected(true);
  }
}
