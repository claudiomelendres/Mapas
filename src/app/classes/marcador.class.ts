export class MarcadorDeMapa {
    public latitud: number;
    public longitud: number;

    public titulo = 'Sin Titulo';
    public descripcion = 'Sin Descripcion';


    constructor( latitud: number, longitud: number) {
        this.latitud = latitud;
        this.longitud = longitud;
    }
}
