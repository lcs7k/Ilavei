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
  
 
  {
    path: 'ajuda',
    loadChildren: () => import('./pages/ajuda/ajuda.module').then( m => m.AjudaPageModule)
  },
  {
    path: 'endereco',
    loadChildren: () => import('./pages/endereco/endereco.module').then( m => m.EnderecoPageModule)
  },
  {
    path: 'conta',
    loadChildren: () => import('./pages/conta/conta.module').then( m => m.ContaPageModule)
  },
  {
    path: 'notificacao',
    loadChildren: () => import('./pages/notificacao/notificacao.module').then( m => m.NotificacaoPageModule)
  },

  {
    path: 'termos',
    loadChildren: () => import('./pages/termos/termos.module').then( m => m.TermosPageModule)
  },
  {
    path: 'pagamento',
    loadChildren: () => import('./pages/pagamento/pagamento.module').then( m => m.PagamentoPageModule)
  },




 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
