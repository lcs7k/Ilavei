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
      'title': 'Angular',
      'icon': 'angular',
      'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
      'color': '#E63135',
      'route': '/tabs/login'
    }, {
      'title': 'CSS3',
      'icon': 'css3',
      'description': 'The latest version of cascading stylesheets - the styling language of the web!',
      'color': '#3575AC',
      'route': '/tabs/login'
    }, {
      'title': 'HTML5',
      'icon': 'html5',
      'description': 'The latest version of the web\'s markup language.',
      'color': '#3575AC',
      'route': '/tabs/login'
    }, {
      'title': 'JavaScript',
      'icon': 'javascript',
      'description': 'One of the most popular programming languages on the Web!',
      'color': '#3575AC',
      'route': '/tabs/login'
    }, {
      'title': 'Sass',
      'icon': 'sass',
      'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
      'color': '#3575AC',
      'route': '/tabs/login'
    }, {
      'title': 'NodeJS',
      'icon': 'nodejs',
      'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
      'color': '#3575AC',
      'route': '/tabs/login'
    }, {
      'title': 'sair',
      'icon': 'python',
      'description': 'A clear and powerful object-oriented programming language!',
      'color': '#3575AC',
      'route': '/tabs/login'
    }, 
  ];
}
