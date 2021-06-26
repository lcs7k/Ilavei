import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Ordem } from '../models/ordem';

@Injectable({
  providedIn: 'root'
})
export class OrdemService {

  constructor(
    private firedb:AngularFirestore,
    private auth:AngularFireAuth
  ) { }


  add(ordem:Ordem){
    return this.firedb.collection<Ordem>("ordem").add(
      {
        ativo:ordem.ativo,
        calculo:ordem.calculo,
        nome:ordem.nome,
        ordemkey:ordem.ordemkey,
        tipo:ordem.tipo,
        valor:ordem.valor,
      }
    )
  }

  getAll(){
    return this.firedb.collection<Ordem>("ordem").snapshotChanges()
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
    return this.firedb.collection<Ordem>("ordem", query=> query.where("tipo", "==", tipo)).snapshotChanges()
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
    return this.firedb.collection<Ordem>("ordem").doc(key).valueChanges();
  }

  update(Ordem:Ordem, key:string){
    return this.firedb.collection<Ordem>("ordem").doc(key).update(Ordem);
  }

  delete(key){
    return this.firedb.collection("ordem").doc(key).delete();
  }
}