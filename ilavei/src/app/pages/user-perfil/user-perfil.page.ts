import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-perfil',
  templateUrl: './user-perfil.page.html',
  styleUrls: ['./user-perfil.page.scss'],
})
export class UserPerfilPage implements OnInit {

key: string = null;
  user: User = new User;

  constructor(
    private userService: UserServiceService,
    private auth: AngularFireAuth

  ) { }

  ngOnInit() {
    this.getUser();
  }

  async getUser() {
    await this.auth.user.subscribe(
      res => {
        this.userService.get(res.uid).subscribe(
          resuser => {
            this.user = resuser;
            this.key = res.uid;
            console.log(resuser);

          }
        )
      }

    )
  }
  sair(){
    this.userService.logout();
  }
}
