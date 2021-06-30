import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MsgService } from '../services/msg.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  senha: string = '';

  constructor(private auth: AngularFireAuth,
    private router: Router,
    private msg: MsgService
  ) { }

  ngOnInit() { }

  Login() {
    this.auth.createUserWithEmailAndPassword(this.email, this.senha)
      .then(
        res => {
          this.router.navigate(['']);

        },
        error => {
          this.msg.presentAlert("Erro", "Usuário não encontrado!");
        }

      )

  }

}
