import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completa',
  templateUrl: './completa.page.html',
  styleUrls: ['./completa.page.scss'],
})
export class CompletaPage implements OnInit {
  servicos = [
    {"valor":25, "nome":"Simples R$25,00" , "calculo":false},
    {"valor":20, "nome":"Completa R$20,00" , "calculo":false},
    {"valor":25, "nome":"Master R$30,00" , "calculo":false},
    
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
