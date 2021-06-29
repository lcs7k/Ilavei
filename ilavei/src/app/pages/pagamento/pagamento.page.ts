import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MsgService } from 'src/app/services/msg.service';
import { Pagamento } from 'src/app/models/pagamento';
import { PagamentoService } from 'src/app/services/pagamento.service';


@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage  implements OnInit {
  
  pagamento: Pagamento = new Pagamento;
  pagamentokey = null;

  
  listaPagamento: Pagamento [];
  valor = 0;
  
  constructor(
    private pagamentoService: PagamentoService,
    private msg: MsgService,
    private router: Router,
    private activadeRouter: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.pagamentokey = this.activadeRouter.snapshot.paramMap.get('key');
    this.getPagamento(this.pagamentokey)
    this.pagamento
  }

  calcular() {
    this.valor = 0
    for (let x = 0; x < this.listaPagamento.length; x++) {
      if (this.listaPagamento[x].calculo) {
        this.valor += this.listaPagamento[x].valor
      }
    }
  }
  async getPagamento(tipo: string) {
    await this.pagamentoService.getAllTipo(tipo).subscribe(
      res => {
        this.listaPagamento = res;
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