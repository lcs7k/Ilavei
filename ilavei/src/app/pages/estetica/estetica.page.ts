import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-estetica',
  templateUrl: './estetica.page.html',
  styleUrls: ['./estetica.page.scss'],
})
export class EsteticaPage implements OnInit {
servicos = [
  {"valor":20, "nome":"serviço1" , "calculo":false},
  {"valor":30, "nome":"serviço2" , "calculo":false},
  {"valor":25, "nome":"serviço3" , "calculo":false},
  {"valor":28, "nome":"serviço4" , "calculo":false},
  {"valor":10, "nome":"serviço5", "calculo":false},
  
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
