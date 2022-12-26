export class Educacion {
    id?: number;
    tituloE: string;
    institucionE: string;
    descripcionE: string;
    urlE : string;

    constructor(tituloE: string, institucionE: string, descripcionE: string, urlE: string) {
        this.tituloE = tituloE;
        this.institucionE = institucionE;
        this.descripcionE = descripcionE;
        this.urlE = urlE;
    }
}
