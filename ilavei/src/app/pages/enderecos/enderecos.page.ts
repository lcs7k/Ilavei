  
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Endereco } from 'src/app/models/endereco';
import { EnderecoService } from 'src/app/services/endereco.service';
import { MsgService } from 'src/app/services/msg.service';


@Component({
  selector: 'app-enderecos',
  templateUrl: './enderecos.page.html',
  styleUrls: ['./enderecos.page.scss'],
})
export class EnderecoPage implements OnInit {
 
  key:string = null;
  listEnderecos: Endereco[];

  constructor(
    private activatedRouter: ActivatedRoute,
    private enderecoService:EnderecoService,
    private msg:MsgService
  ) { }

  ngOnInit() {
    this.key = this.activatedRouter.snapshot.paramMap.get('key');
    this.getAllEndererecos(this.key);
  }

 
  async getAllEndererecos(key){
    await this.enderecoService.getAllforUser(key).subscribe(
      res =>{
        this.listEnderecos = res;
      }, 
      error =>{
       this.msg.presentAlert("Error", "Erro ao listar os enderecos!");
      }
    )
  }
}