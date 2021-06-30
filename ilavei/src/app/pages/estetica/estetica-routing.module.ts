import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsteticaPage } from './estetica.page';

const routes: Routes = [
  {
    path: '',
    component: EsteticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsteticaPageRoutingModule {}
