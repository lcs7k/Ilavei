import { Component, OnInit } from '@angular/core';
import { Completa } from '../../models/completa';
import { CompletaService } from 'src/app/services/completa.service';
import { MsgService } from '../../services/msg.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';   



@Component({
  selector: 'app-completa',
  templateUrl: './completa.page.html',
  styleUrls: ['./completa.page.scss'],
})
export class CompletaPage implements OnInit {
  completa = [
    {"valor":25, "nome":"Simples R$25,00" , "calculo":false},
    {"valor":20, "nome":"Completa R$20,00" , "calculo":false},
    {"valor":30, "nome":"Master R$30,00" , "calculo":false},
    
  ]
  valor=0;

  
    constructor() {}
  
    ngOnInit() {
      
    }
    calcular(){
      this.valor=0
      for(let x=0;x< this.completa.length;x++){
        if(this.completa[x].calculo){
          this.valor+=this.completa[x].valor
        }
      }
    }
    
  
  }

  
    