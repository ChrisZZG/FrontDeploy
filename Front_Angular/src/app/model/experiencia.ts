export class Experiencia {
    id? : number;
    nombreE : string;
    positionE : string;
    descriptionE : string;
    urlE : string;

    constructor( nombreE: string, positionE: string, descriptionE: string, urlE: string){
        this.nombreE = nombreE;
        this.positionE = positionE;
        this.descriptionE = descriptionE;
        this.urlE = urlE;
    }
}
