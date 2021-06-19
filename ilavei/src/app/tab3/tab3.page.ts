import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() { }

  techs = [
    {
      'title': 'Conta',
      'icon': 'person-outline',
      'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
      'color': '#3575AC',
      'route': '/tabs/conta'
    }, {
      'title': 'Pagamentos',
      'icon': 'card-outline',
      'description': 'The latest version of cascading stylesheets - the styling language of the web!',
      'color': '#3575AC',
      'route': '/tabs/pagamento'
    }, {
      'title': 'Endereços',
      'icon': 'locate-outline',
      'description': 'The latest version of the web\'s markup language.',
      'color': '#3575AC',
      'route': '/tabs/enderecos'
    }, {
      'title': 'Notificações',
      'icon': 'notifications-outline',
      'description': 'One of the most popular programming languages on the Web!',
      'color': '#3575AC',
      'route': '/tabs/notificacao'
    }, {
      'title': 'Ajuda',
      'icon': 'help-outline',
      'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
      'color': '#3575AC',
      'route': '/tabs/ajuda'
    }, {
      'title': 'Termos de Uso',
      'icon': 'reader-outline',
      'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
      'color': '#3575AC',
      'route': '/tabs/termos'
    }, {
      'title': 'sair',
      'icon': 'exit-outline',
      'description': 'A clear and powerful object-oriented programming language!',
      'color': '#3575AC',
      'route': '/tabs/login'
    }, 
  ];
}
