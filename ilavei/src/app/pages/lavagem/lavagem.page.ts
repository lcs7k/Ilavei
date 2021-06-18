import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lavagem',
  templateUrl: './lavagem.page.html',
  styleUrls: ['./lavagem.page.scss'],
})
export class LavagemPage implements OnInit {
  servicos = [
    {"valor":10, "nome":"Interna   R$10,00" , "calculo":false},
    {"valor":30, "nome":"Limpeza Banco de Couros R$20,00 " , "calculo":false},
    {"valor":25, "nome":"Limpeza Técnica de Motor R$25,00" , "calculo":false}, 
    {"valor":90, "nome":"Oxi-Sanitização R$90,00 " , "calculo":false},
    {"valor":20, "nome":"Limpeza de Ar R$20,00 ", "calculo":false},
    
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
