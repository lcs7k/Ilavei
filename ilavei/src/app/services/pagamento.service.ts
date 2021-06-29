import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import {  Pagamento } from '../models/pagamento';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  constructor(
    private firedb:AngularFirestore,
    private auth:AngularFireAuth
  ) { }


  add(pagamento:Pagamento){
    return this.firedb.collection<Pagamento>("pagamento").add(
      {
        cvv:pagamento.cvv,
        nome:pagamento.nome,
        numcartao:pagamento.numcartao,
        validadeano:pagamento.validadeano,
        validademes:pagamento.validademes,
        pagamantokey:pagamento.pagamantokey,
        ativo:pagamento.ativo,
        valor:pagamento.valor,
        calculo:pagamento.calculo,
      }
    )
  }

  getAll(){
    return this.firedb.collection<Pagamento>("pagamento").snapshotChanges()
    .pipe(
      map(dados =>
        dados.map(
          d => ({
            key: d.payload.doc.id, ...d.payload.doc.data()
          })
        )
      )
    )
  }

  getAllTipo(tipo:string){
    return this.firedb.collection<Pagamento>("pagamento", query=> query.where("tipo", "==", tipo)).snapshotChanges()
    .pipe(
      map(dados =>
        dados.map(
          d => ({
            key: d.payload.doc.id, ...d.payload.doc.data()
          })
        )
      )
    )
  }

  get(key){
    return this.firedb.collection<Pagamento>("pagamento").doc(key).valueChanges();
  }

  update(Pagamento:Pagamento, key:string){
    return this.firedb.collection<Pagamento>("pagamento").doc(key).update(Pagamento);
  }

  delete(key){
    return this.firedb.collection("pagamento").doc(key).delete();
  }
}