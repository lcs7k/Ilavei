import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { Ordem } from 'src/app/models/ordem';
import { MsgService } from 'src/app/services/msg.service';
import { OrdemService } from 'src/app/services/ordem.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/models/user';
import { Servico } from 'src/app/models/servico';
import { Pagamento } from 'src/app/models/pagamento';


@Component({
  selector: 'app-ordem-servico',
  templateUrl: './ordem-servico.page.html',
  styleUrls: ['./ordem-servico.page.scss'],
})
export class OrdemServicoPage implements OnInit {

  servico: Servico = new Servico;
  ordem: Ordem = new Ordem;
  ordemkey = null;
  user: User = new User;
  key: string = null;
  userkey: string = null;
  pagamento: Pagamento = new Pagamento;
  



  listaOrdem: Ordem[];
  valor = 0;

  constructor(
    private ordemService: OrdemService,
    private msg: MsgService,
    private router: Router,
    private activadeRouter: ActivatedRoute,
    private userService: UserServiceService,
    private auth: AngularFireAuth,

  ) {

  }

  ngOnInit() {
    this.ordemkey = this.activadeRouter.snapshot.paramMap.get('key');
    this.getOrdem(this.ordemkey)
    this.valor
    this.auth.user.subscribe(
      res => {
        this.userService.get(res.uid).subscribe(
          resuser => {
            this.user = resuser;
            this.userkey = res.uid;
          }
        )
      }
    )
  }


  calcular() {
    this.valor = 0
    for (let x = 0; x < this.listaOrdem.length; x++) {
      if (this.listaOrdem[x].calculo) {
        this.valor += this.listaOrdem[x].valor
      }
    }
  }

  async getOrdem(tipo: string) {
    await this.ordemService.getAllTipo(tipo).subscribe(
      res => {
        this.listaOrdem = res;
        console.log(res);
        //return true;
      },
      error => {
        console.log("ERRO:", error);
        //return false;
      }
    )
  }

  Valor() {
  }


  confordem() {
    this.servico.listaordem=[];
    // for (let x = 0; x < this.listaOrdem.length; x++) {
    //   if (this.listaOrdem[x].calculo) {
    //     this.servico.listaordem.push(this.listaOrdem[x])
    //    }
    // }
    this.listaOrdem.forEach(kkkk=>{
      if (kkkk.calculo) {
        this.servico.listaordem.push(kkkk)
       }
    })
    
    this.servico.userkey = this.userkey
    console.log(this.servico);

  }
    
    
  pagaordem() {
      this.pagamento.listaordem=[];
      // for (let x = 0; x < this.listaOrdem.length; x++) {
      //   if (this.listaOrdem[x].calculo) {
      //     this.servico.listaordem.push(this.listaOrdem[x])
      //    }
      // }
      this.listaOrdem.forEach(kkkk=>{
        if (kkkk.calculo) {
          this.pagamento.listaordem.push(kkkk)
         }
      })
      
      this.servico.userkey = this.userkey
      console.log(this.pagamento);
  
    

  }

  
}

