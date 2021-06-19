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
        path: 'userAdd',
        loadChildren: () => import('../pages/user-add/user-add.module').then( m => m.UserAddPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../pages/login/login.module').then( m => m.LoginPageModule)
      },

      {
        path: 'userAdd/:key',
        loadChildren: () => import('../pages/user-add/user-add.module').then( m => m.UserAddPageModule)
      },

      {
        path: 'user-perfil/:key',
        loadChildren: () => import('../pages/user-perfil/user-perfil.module').then( m => m.UserPerfilPageModule)
      },


      {
        path: 'endereco-add/:key',
        loadChildren: () => import('../pages/endereco-add/endereco-add.module').then( m => m.EnderecoAddPageModule)
      },

      {
        path: 'ajuda',
        loadChildren: () => import('../pages/ajuda/ajuda.module').then( m => m.AjudaPageModule)
      },
      {
        path: 'conta',
        loadChildren: () => import('../pages/conta/conta.module').then( m => m.ContaPageModule)
      },
      {
        path: 'enderecos',
        loadChildren: () => import('../pages/enderecos/enderecos.module').then( m => m.EnderecosPageModule)
      },
     
      {
        path: 'notificacao',
        loadChildren: () => import('../pages/notificacao/notificacao.module').then( m => m.NotificacaoPageModule)
      },
      {
        path: 'pagamento',
        loadChildren: () => import('../pages/pagamento/pagamento.module').then( m => m.PagamentoPageModule)
      },
      {
        path: 'termos',
        loadChildren: () => import('../pages/termos/termos.module').then( m => m.TermosPageModule)
      },
      {
        path: 'endereco-list',
        loadChildren: () => import('../pages/endereco-list/endereco-list.module').then( m => m.EnderecoListPageModule)
      },
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
export class TabsPageRoutingModule {}
