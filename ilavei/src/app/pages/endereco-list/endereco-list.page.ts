import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/models/endereco';
import { EnderecoService } from 'src/app/services/endereco.service';


@Component({
  selector: 'app-endereco-list',
  templateUrl: './endereco-list.page.html',
  styleUrls: ['./endereco-list.page.scss'],
})
export class EnderecoListPage implements OnInit {

  endereco:Endereco[] = [];
 

  constructor(
    private enderecoService:EnderecoService,
    private router:Router
  ) { }

  ngOnInit() {
    this.enderecoService.getAll().subscribe(
      res=>{
        this.endereco = res;
        console.log(this.endereco);
      },
      erro =>{

      }
    )   
  }

  editar(usuario){
    this.router.navigate(['/tabs/userAdd',usuario.key])
  }


}
