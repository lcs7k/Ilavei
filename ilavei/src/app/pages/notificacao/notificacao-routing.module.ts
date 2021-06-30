import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificacaoPage } from './notificacao.page';

const routes: Routes = [
  {
    path: '',
    component: NotificacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificacaoPageRoutingModule {}
