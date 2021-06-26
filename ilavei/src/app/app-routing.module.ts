import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  
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
  
  // {
  //   path: 'pagamento',
  //   loadChildren: () => import('./pages/pagamento/pagamento.module').then( m => m.PagamentoPageModule)
  // },
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
  // {
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
export class AppRoutingModule {}
