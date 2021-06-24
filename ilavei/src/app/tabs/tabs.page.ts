import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  usuario: User = new User();
  perfilfoto: string = '/assets/perfil.png';

  constructor(
    
    protected auth: AngularFireAuth) {}

  ngOnInit() {
    this.verifUser();
  }

  ionViewWillEnter() {
    //this.verifUser();
  }

  verifUser() {
    this.auth.user.subscribe(
      (res) => {
        if (res != null) {
          this.usuario.email = res.email;
          this.usuario.key = res.uid;
          if (res.photoURL) {
            this.usuario.foto = res.photoURL;
          }
          if (this.usuario.foto) {
            this.perfilfoto = this.usuario.foto;
          }
        } else {
          this.usuario = null;
        }
      },
      (erro) => {
        this.usuario = null;
      }
    );
  }
}