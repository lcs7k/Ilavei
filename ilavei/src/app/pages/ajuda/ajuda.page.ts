import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.page.html',
  styleUrls: ['./ajuda.page.scss'],
})
export class AjudaPage implements OnInit {

  constructor() { }
  
  techs = [
    {
      'title': 'Dados Pessoais',
    }, {
      'title': 'Segurança',
      
    }, {
      'title': 'Privacidade',
     
    }, {
      'title': 'Excluir Conta',
     
    }, 
  ];

  ngOnInit() {
  }

}
