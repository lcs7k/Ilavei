import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdemServicoPage } from './ordem-servico.page';

const routes: Routes = [
  {
    path: '',
    component: OrdemServicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdemServicoPageRoutingModule {}
