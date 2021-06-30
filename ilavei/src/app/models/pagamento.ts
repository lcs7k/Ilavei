import { Ordem } from "./ordem";


export class Pagamento {

    userkey: string;
    listaordem: Ordem[] = [];
    pix: string ;
    dinheiro: string;
    debito: string;
    credito: string;
    data: Date = new Date;

}