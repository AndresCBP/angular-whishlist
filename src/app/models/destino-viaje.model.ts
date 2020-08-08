export class DestinoViaje{
    private selected: boolean;
    public id: string;
    public servicios: string[];
    public votes = 0;
    constructor(public nombre: string, public imagenUrl: string) {
        this.servicios = ['pileta', 'desayuno'];
   }
   setSelected(s: boolean) {
     this.selected = s;
   }
   isSelected() {
     return this.selected;
   }
   voteUp(): any {
     this.votes++;
   }
   voteDown(): any {
     this.votes--;
   }
}