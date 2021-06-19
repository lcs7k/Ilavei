import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {

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
