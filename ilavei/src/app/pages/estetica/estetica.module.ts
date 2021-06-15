import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsteticaPageRoutingModule } from './estetica-routing.module';

import { EsteticaPage } from './estetica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsteticaPageRoutingModule
  ],
  declarations: [EsteticaPage]
})
export class EsteticaPageModule {}
