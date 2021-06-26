import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ordem } from 'src/app/models/ordem';
import { MsgService } from 'src/app/services/msg.service';
import { OrdemService } from 'src/app/services/ordem.service';

@Component({
  selector: 'app-ordem-servico',
  templateUrl: './ordem-servico.page.html',
  styleUrls: ['./ordem-servico.page.scss'],
})
export class OrdemServicoPage implements OnInit {

  ordem: Ordem = new Ordem;
  ordemkey = null;

  listaOrdem: Ordem [];
  valor = 0;

  constructor(
    private ordemService: OrdemService,
    private msg: MsgService,
    private router: Router,
    private activadeRouter: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.ordemkey = this.activadeRouter.snapshot.paramMap.get('key');
    this.getOrdem(this.ordemkey)
    this.valor
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
}
