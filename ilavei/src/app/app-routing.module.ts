import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'user-list',
    loadChildren: () => import('./pages/user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'endereco',
    loadChildren: () => import('./pages/endereco/endereco.module').then( m => m.EnderecoPageModule)
  },
  {
    path: 'endereco.add',
    loadChildren: () => import('./pages/endereco.add/endereco.add.module').then( m => m.Endereco.AddPageModule)
  },
  {
    path: 'endereco-add',
    loadChildren: () => import('./pages/endereco-add/endereco-add.module').then( m => m.EnderecoAddPageModule)
  },
  {
    path: 'endereco-list',
    loadChildren: () => import('./pages/endereco-list/endereco-list.module').then( m => m.EnderecoListPageModule)
  },

 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
