import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-estetica',
  templateUrl: './estetica.page.html',
  styleUrls: ['./estetica.page.scss'],
})
export class EsteticaPage implements OnInit {
servicos = [
  {"valor":10, "nome":"Polimento do Farol" , "calculo":false},
  {"valor":20, "nome":"Cristalização de Vidro" , "calculo":false},
  {"valor":25, "nome":"Espelhamento de Pintura" , "calculo":false},
  {"valor":90, "nome":"Vitrificação" , "calculo":false},
  {"valor":20, "nome":"Detalhamento", "calculo":false},
  
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
