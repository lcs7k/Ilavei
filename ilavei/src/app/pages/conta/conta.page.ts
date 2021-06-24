import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {

  constructor(
    private userService:UserServiceService,
    private alertController:AlertController
  ) { }

  techs = [
    {
      'title': 'Dados Pessoais',
    }, {
      'title': 'Segurança',
      
    }, {
      'title': 'Privacidade',
     
    }, 
  ];

  ngOnInit() {
  }

  async excluir(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      //eader: 'Confirm!',
      message: 'Deseja Excluir Conta?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Deseja Excluir Conta?');
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.userService.delete();
          }
        }
      ]
    });

    await alert.present();
  }

 
  
}
