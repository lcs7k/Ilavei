import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LavagemPage } from './lavagem.page';

const routes: Routes = [
  {
    path: '',
    component: LavagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LavagemPageRoutingModule {}
