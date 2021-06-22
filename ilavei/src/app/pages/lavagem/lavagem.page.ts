import { Component, OnInit } from '@angular/core';
import { Completa } from 'src/app/models/completa';
import { CompletaPage } from '../completa/completa.page';



@Component({
  selector: 'app-lavagem',
  templateUrl: './lavagem.page.html',
  styleUrls: ['./lavagem.page.scss'],
})
export class LavagemPage implements OnInit {
  completa:Completa = new Completa();
  userkey: string = null;
  servicos = [
    
    
    {"valor":10, "nome":"Interna   R$10,00" , "calculo":false},
    {"valor":160, "nome":"Limpeza Banco de Couros R$160,00 " , "calculo":false},
    {"valor":90, "nome":"Limpeza Técnica de Motor R$90,00" , "calculo":false}, 
    {"valor":90, "nome":"Oxi-Sanitização R$90,00 " , "calculo":false},
    {"valor":150, "nome":"Limpeza de Ar R$150,00 ", "calculo":false},
    
  ]
  valor=0;
    constructor() {
      
     }
  
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
