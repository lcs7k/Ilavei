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
        path: 'lavagem',
        loadChildren: () => import('../pages/lavagem/lavagem.module').then( m => m.LavagemPageModule)
      },

      {
        path: 'estetica',
        loadChildren: () => import('../pages/estetica/estetica.module').then( m => m.EsteticaPageModule)
      },
      
      {
        path: 'completa',
      
        loadChildren: () => import('../pages/completa/completa.module').then( m => m.CompletaPageModule)
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
