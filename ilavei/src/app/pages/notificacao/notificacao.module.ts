import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificacaoPageRoutingModule } from './notificacao-routing.module';

import { NotificacaoPage } from './notificacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificacaoPageRoutingModule
  ],
  declarations: [NotificacaoPage]
})
export class NotificacaoPageModule {}
