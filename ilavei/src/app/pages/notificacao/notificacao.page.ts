import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.page.html',
  styleUrls: ['./notificacao.page.scss'],
})
export class NotificacaoPage implements OnInit {

  user: User = new User;
  key: string = null;

  constructor(
    private userService: UserServiceService,
    private auth: AngularFireAuth,

  ) { }

  ngOnInit() {
    this.auth.user.subscribe(
      res => {
        this.userService.get(res.uid).subscribe(
          resuser => {
            this.user = resuser;
            this.key = res.uid;
          }
        )
      }

    )
  }

  ionViewDidLeave(){
    this.atualizeuser();
  } 

  atualizeuser() {
    this.userService.update(this.user, this.key)
    console.log(this.user)
  }
}
