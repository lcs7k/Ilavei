import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnderecoconfPage } from './enderecoconf.page';

const routes: Routes = [
  {
    path: '',
    component: EnderecoconfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnderecoconfPageRoutingModule {}
