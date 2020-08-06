import { DestinoViaje } from './../models/destino-viaje.model';

export class DestinosApiClient{
    private selected: boolean;
    public servicios: string[];
    public destinos: string[];
    constructor(public nombre:string, public u:string) {
        this.servicios = ['pileta', 'desayuno'];
        this.destinos = ['Bogota']
    }
    add(d: DestinoViaje) {

    }
    getAll(): string[] {
        return this.destinos;
    }
    isSelected(): boolean {
        return this.selected;
    }
    setSelected(s: boolean) {
        this.selected = s;
    }
}