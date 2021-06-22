import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Endereco } from 'src/app/models/endereco';
import { User } from 'src/app/models/user';
import { EnderecoService } from 'src/app/services/endereco.service';
import { MsgService } from 'src/app/services/msg.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-enderecoconf',
  templateUrl: './enderecoconf.page.html',
  styleUrls: ['./enderecoconf.page.scss'],
})
export class EnderecoconfPage implements OnInit {
 
  key:string = null;
  user: User = new User;
  listEnderecos: Endereco[];

  constructor(
    private activatedRouter: ActivatedRoute,
    private userService:UserServiceService,
    private enderecoService:EnderecoService,
    private msg:MsgService,
    private router:Router
  ) { }

  ngOnInit() {
   // this.key = this.activatedRouter.snapshot.paramMap.get('key');
   this.userService.verifuser().subscribe(
     res=>{
       this.key = res.uid
       this.getAllEndererecos(this.key);
      },
      error=>{
        this.key =  null;
      })
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

  editar(endereco){
    this.router.navigate(['/tabs/endereco-add',endereco.key])
  }

  apagar(endereco){
    this.enderecoService.delete(endereco.key)
  }
}