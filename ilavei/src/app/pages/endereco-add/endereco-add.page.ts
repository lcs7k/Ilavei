import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {EnderecoService } from '../../services/endereco.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MsgService } from 'src/app/services/msg.service';
import { Endereco } from 'src/app/models/endereco';

@Component({
  selector: 'app-endereco-add',
  templateUrl: './endereco-add.page.html',
  styleUrls: ['./endereco-add.page.scss'],
})
export class EnderecoAddPage implements OnInit {

  Endereco: Endereco = new Endereco();
  userkey: string = null;
  EnderecoService: any;

  constructor(
    private storage: Storage,
    // public alertController: AlertController,
    private userService: EnderecoAddPage,
    // public toastController: ToastController,
    protected msg: MsgService,
    private router: Router,
    private activadeRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userkey = this.activadeRouter.snapshot.paramMap.get('key');
    //this.getEndereco(this.key)
  }

  async getEndereco(userkey) {
    if (userkey) {
      await this.EnderecoService.get(key).subscribe(
        res => {
          this.Endereco = res;
          return true;
        },
        error => {
          console.log("ERRO:", error);
          return false;
        }
      )
    }
  }

  buscaCEP() {
    this.EnderecoService.pegaCEP(this.Endereco.cep).subscribe(
      res => {
        console.log(res);
        if (res.erro) {
          this.msg.presentToast("CEP não localizado!");
        } else {
          //this.user = res;
          //this.user.cep = res.cep;
          this.Endereco.logradouro = res.logradouro;
          this.Endereco.localidade = res.localidade;
          this.Endereco.bairro = res.bairro;
          this.Endereco.uf = res.uf;
        }
      },
      error => {
        console.error(error)
      }
    )
  }


  salvar() {
    try {
      this.msg.presentLoading();
      if (this.userkey) {
        this.EnderecoService.update(this.Endereco, this.userkey).then(
          res => {
            console.log('Dados Salvos firebase...', res);
            this.msg.dismissLoading();
            this.msg.presentAlert('Alerta', 'Usuário atualizado.');
            this.Endereco = new Endereco();
            this.router.navigate(['']);
          },
          error => {
            console.error("Erro ao salvar.", error);
            this.msg.dismissLoading();
            this.msg.presentAlert("Error", "Não foi possivel atualizar.");
          }
        )
      } else {
        this.EnderecoService.add(this.Endereco).then(
          res => {
            console.log('Dados Salvos firebase...', res)
            this.msg.dismissLoading();
            this.msg.presentAlert('Alerta', 'Usuário cadastrado.');
            this.Endereco = new Endereco();
            this.router.navigate(['']);
          },
          error => {
            console.error("Erro ao salvar.", error);
            this.msg.dismissLoading();
            this.msg.presentAlert("Error", "Não foi possivel salvar.");
          }
        )
      }
    } catch (error) {
      console.error("Erro ao salvar.", error);
      this.msg.dismissLoading();
      this.msg.presentAlert("Error", "Não foi possivel conectar.");
    }

  }

  doRefresh(event) {
    console.log('Begin async operation');
    if (this.getEndereco(this.key)) {
      //setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      //}, 2000);
    }
  }

}
