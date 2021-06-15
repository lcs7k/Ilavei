import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LavagemPageRoutingModule } from './lavagem-routing.module';

import { LavagemPage } from './lavagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LavagemPageRoutingModule
  ],
  declarations: [LavagemPage]
})
export class LavagemPageModule {}
