import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletaPageRoutingModule } from './completa-routing.module';

import { CompletaPage } from './completa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletaPageRoutingModule
  ],
  declarations: [CompletaPage]
})
export class CompletaPageModule {}
