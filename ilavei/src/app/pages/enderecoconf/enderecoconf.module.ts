import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnderecoconfPageRoutingModule } from './enderecoconf-routing.module';

import { EnderecoconfPage } from './enderecoconf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnderecoconfPageRoutingModule
  ],
  declarations: [EnderecoconfPage]
})
export class EnderecoconfPageModule {}
