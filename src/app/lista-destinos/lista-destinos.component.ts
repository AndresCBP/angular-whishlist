import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';
import { DestinosApiClient } from './../models/destinos-api-client.model';
import { AppState } from '../app.module';
import { ElegidoFavoritoAction, NuevoDestinoAction } from '../models/destinos-viajes-state.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  updates: string[];
  all;

  constructor(public destinosApiClient:DestinosApiClient, private store: Store<AppState>) {
    this.onItemAdded = new EventEmitter();
    this.updates = [];
    this.store.select(state => state.destinos.favorito)
      .subscribe(d => {
        if (d != null) {
          this.updates.push('Se ha elegido a' + d.nombre)
        }
      });
    store.select(state => state.destinos.items).subscribe(items => this.all = items);
    /*
    this.destinosApiClient.subscribeOnChange((d: DestinoViaje) => {
      if (d != null) {
        this.updates.push('Se ha elegido a' + d.nombre)
      }
    });
    */
  }

  ngOnInit() {
  }

  agregado(d: DestinoViaje) {
    //this.store.dispatch(new NuevoDestinoAction(d));
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
  }

  elegido(e: DestinoViaje) {
    //this.store.dispatch(new ElegidoFavoritoAction(e));
    this.destinosApiClient.elegir(e);
  }
}
