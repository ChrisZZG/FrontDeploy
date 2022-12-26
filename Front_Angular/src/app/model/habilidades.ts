export class Habilidades {

    id?: number;
    laborales: string;
    sociales: string;

    constructor(laborales: string, sociales: string) {
        this.laborales = laborales;
        this.sociales = sociales;
    }
}
