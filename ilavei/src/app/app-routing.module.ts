import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },

  // {
  //   path: 'user-perfil',
  //   loadChildren: () => import('./pages/user-perfil/user-perfil.module').then( m => m.UserPerfilPageModule)
  // },
  // {
  //   path: 'endereco-list',
  //   loadChildren: () => import('./pages/endereco-list/endereco-list.module').then( m => m.EnderecoListPageModule)
  // },
  // {
  //   path: 'endereco-add',
  //   loadChildren: () => import('./pages/endereco-add/endereco-add.module').then( m => m.EnderecoAddPageModule)
  // },
  // {
  //   path: 'tab4',
  //   loadChildren: () => import('./tab4/tab4.module').then(m => m.Tab4PageModule)
  // },
  // {
  //   path: 'ajuda',
  //   loadChildren: () => import('./pages/ajuda/ajuda.module').then(m => m.AjudaPageModule)
  // },
  // {
  //   path: 'conta',
  //   loadChildren: () => import('./pages/conta/conta.module').then(m => m.ContaPageModule)
  // },
  // {
  //   path: 'notificacao',
  //   loadChildren: () => import('./pages/notificacao/notificacao.module').then(m => m.NotificacaoPageModule)
  // },
  // {
  //   path: 'termos',
  //   loadChildren: () => import('./pages/termos/termos.module').then(m => m.TermosPageModule)
  // },
  // {
  //   path: 'pagamento',
  //   loadChildren: () => import('./pages/pagamento/pagamento.module').then(m => m.PagamentoPageModule)
  // },
  // {
  //   path: 'enderecoconf',
  //   loadChildren: () => import('./pages/enderecoconf/enderecoconf.module').then(m => m.EnderecoconfPageModule)
  // },

  
  {
    path: 'user-perfil',
    loadChildren: () => import('./pages/user-perfil/user-perfil.module').then( m => m.UserPerfilPageModule)
  },

  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  // {
  //   path: 'lavagem',
  //   loadChildren: () => import('./pages/lavagem/lavagem.module').then( m => m.LavagemPageModule)
  // },
  
  // {
  //   path: 'completa',
  //   loadChildren: () => import('./pages/completa/completa.module').then( m => m.CompletaPageModule)
  // },
  
  //  {
  //   path: 'pagamento',
  //    loadChildren: () => import('./pages/pagamento/pagamento.module').then( m => m.PagamentoPageModule)
  //  },
  // {
  //   path: 'servicos',
  //   loadChildren: () => import('./pages/servicos/servicos.module').then( m => m.ServicosPageModule)
  // },
  // {
  //   path: 'servicosrealizados',
  //   loadChildren: () => import('./pages/servicosrealizados/servicosrealizados.module').then( m => m.ServicosrealizadosPageModule)
  // },
  // {
  //   path: 'realizados',
  //   loadChildren: () => import('./pages/realizados/realizados.module').then( m => m.RealizadosPageModule)
  // },
  //  {
  //   path: 'ordem-servico',
  //   loadChildren: () => import('./pages/ordem-servico/ordem-servico.module').then( m => m.OrdemServicoPageModule)
  // },
  
  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export class AppRoutingModule {}
