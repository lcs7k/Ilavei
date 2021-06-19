import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-estetica',
  templateUrl: './estetica.page.html',
  styleUrls: ['./estetica.page.scss'],
})
export class EsteticaPage implements OnInit {
servicos = [
  {"valor":10, "nome": "Polimento do Farol R$10,00 " , "calculo":false},
  {"valor":100, "nome":"Cristalização de Vidros R$100,00" , "calculo":false},
  {"valor":25, "nome":"Espelhamento de Pintura R$25,00" , "calculo":false},
  {"valor":60, "nome":"Vitrificação  R$60,00" , "calculo":false},
  {"valor":20, "nome":"Detalhamento  R$20,00", "calculo":false},
  
]
valor=0;
  constructor() { }

  ngOnInit() {
  }
  calcular(){
    this.valor=0
    for(let x=0;x< this.servicos.length;x++){
      if(this.servicos[x].calculo){
        this.valor+=this.servicos[x].valor
      }
    }
  }
  

}
