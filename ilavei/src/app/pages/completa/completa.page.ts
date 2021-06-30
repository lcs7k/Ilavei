import { Component, NgModule, OnInit } from '@angular/core';
import { Completa } from '../../models/completa';
import { CompletaService } from 'src/app/services/completa.service';
import { MsgService } from '../../services/msg.service';
import { ActivatedRoute, Router } from '@angular/router'; 
import { environment } from 'src/environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { ngModuleJitUrl } from '@angular/compiler';
import { AngularFireAuth } from '@angular/fire/auth';




@Component({
  selector: 'app-completa',
  templateUrl: './completa.page.html',
  styleUrls: ['./completa.page.scss'],
})
export class CompletaPage implements OnInit {
  simples: string = '';
  completaa: string = '';
  master: string = '';
  valoor: string = '';
  
  completa = [
    {"valor":25, "nome":"Simples R$25,00" , "calculo":false},
    {"valor":20, "nome":"Completa R$20,00" , "calculo":false},
    {"valor":30, "nome":"Master R$30,00" , "calculo":false},
    
    
  ]
  valor=0;
  Completa: any;

  
    constructor(
      private auth: AngularFireAuth,
    private router: Router,
    private msg: MsgService
    ) {
      
    }
  
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
     
    Salvar() {
      this.Completa(this.simples, this.master, this.valor, this.completa)
        .then(
          res => {
            this.router.navigate(['']);
  
          },
          error => {
            this.msg.presentAlert("Erro", "Usuário não encontrado!");
          }
  
        )
  
    }
  
  }
  
    
   
  
  
