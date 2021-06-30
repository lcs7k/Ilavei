import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnderecoListPageModule } from './endereco-list.module';



const routes: Routes = [
  {
    path: '',
    component: EnderecoListPageModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnderecoListPageRoutingModule {}
