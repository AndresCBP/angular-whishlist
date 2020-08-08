import { DestinoViaje } from './../models/destino-viaje.model';
import { Subject, BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import { NuevoDestinoAction, ElegidoFavoritoAction } from './destinos-viajes-state.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DestinosApiClient{
    public destinos: DestinoViaje[];
    current: Subject<DestinoViaje> = new BehaviorSubject<DestinoViaje>(null);
    constructor(private store: Store<AppState>) {
        this.destinos = [];
    }

    add(d: DestinoViaje) {
        this.store.dispatch(new NuevoDestinoAction(d));
    }
    elegir(d: DestinoViaje) {
        this.store.dispatch(new ElegidoFavoritoAction(d));
    }
    getAll(): DestinoViaje[] {
        return this.destinos;
    }
    getById(id: string): DestinoViaje {
        return this.destinos.filter(function(d) {
            return d.id.toString() === id;
        })[0];
    }
    subscribeOnChange(fn) {
        this.current.subscribe(fn);
    }
}