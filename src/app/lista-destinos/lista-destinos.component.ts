import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';
import { DestinosApiClient } from './../models/destinos-api-client.model';
@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinosPopulares: string[];
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  
  constructor(private destinosApiClient:DestinosApiClient) {
    this.destinosPopulares = ['Bogota', 'Medellin', 'Cali'];
    this.onItemAdded = new EventEmitter();
  }

  ngOnInit(): void {
  }

  agregado(d: DestinoViaje) {
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
  }
  guardarPopular(d: DestinoViaje) {
    this.destinosPopulares.push(d.nombre);
  }

  elegido(e: DestinoViaje) {
    this.destinosApiClient.getAll().forEach(x => e.setSelected(false));
    this.guardarPopular(e);
    e.setSelected(true);
  }
}
