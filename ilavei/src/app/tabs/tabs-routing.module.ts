import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },

      {
        path: 'login',
        loadChildren: () => import('../pages/login/login.module').then(m => m.LoginPageModule)
      },
      //Usuario
     
      {
        path: 'userAdd',
        loadChildren: () => import('../pages/user-add/user-add.module').then(m => m.UserAddPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../pages/login/login.module').then( m => m.LoginPageModule)
      },

      {
        path: 'userAdd/:key',
        loadChildren: () => import('../pages/user-add/user-add.module').then(m => m.UserAddPageModule)
      },
      {
        path: 'user-perfil/:key',
        loadChildren: () => import('../pages/user-perfil/user-perfil.module').then(m => m.UserPerfilPageModule)
      },
      //endereco
      {
        path: 'endereco-add/user/:userkey',
        loadChildren: () => import('../pages/endereco-add/endereco-add.module').then(m => m.EnderecoAddPageModule)
      },
      {
        path: 'endereco-add/:key',
        loadChildren: () => import('../pages/endereco-add/endereco-add.module').then(m => m.EnderecoAddPageModule)
      },
      {
        path: 'enderecoconf',
        loadChildren: () => import('../pages/enderecoconf/enderecoconf.module').then(m => m.EnderecoconfPageModule)
      },
      {
        path: 'endereco-list',
        loadChildren: () => import('../pages/endereco-list/endereco-list.module').then(m => m.EnderecoListPageModule)
      },

      {
        path: 'ajuda',
        loadChildren: () => import('../pages/ajuda/ajuda.module').then(m => m.AjudaPageModule)
      },
      {
        path: 'conta',
        loadChildren: () => import('../pages/conta/conta.module').then(m => m.ContaPageModule)
      },
      
      {
        path: 'ordem/:key',
        loadChildren: () => import('../pages/ordem-servico/ordem-servico.module').then( m => m.OrdemServicoPageModule)
      },

      {
        path: 'pagamento/:key',
        loadChildren: () => import('../pages/pagamento/pagamento.module').then( m => m.PagamentoPageModule)
      },

      {
        path: 'notificacao',
        loadChildren: () => import('../pages/notificacao/notificacao.module').then(m => m.NotificacaoPageModule)
      },
      {
        path: 'pagamento',
        loadChildren: () => import('../pages/pagamento/pagamento.module').then(m => m.PagamentoPageModule)
      },
      {
        path: 'termos',
        loadChildren: () => import('../pages/termos/termos.module').then(m => m.TermosPageModule)
      },
=======
      
      
      
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
