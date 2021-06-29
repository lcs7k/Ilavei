  
export class Pagamento {
    cvv:string;
    nome: string;
    numcartao: string;
    validadeano: string;
    validademes: string;
    pagamantokey: string;
    ativo: boolean = true;
    calculo: boolean = true;
    valor:number;
}   