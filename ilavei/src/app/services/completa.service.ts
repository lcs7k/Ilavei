import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Completa } from "../models/completa";
import { AngularFirestore } from "@angular/fire/firestore";
import { CompletaPage } from "../pages/completa/completa.page";
import { AngularFireAuth } from "@angular/fire/auth";


@Injectable({
  providedIn: 'root'
})
export class CompletaService {
  

  constructor(
    private http: HttpClient,
    private firedb:AngularFirestore,
    private auth:AngularFireAuth
  ) { }


  add(lavagem:Completa){
    return this.firedb.collection<Completa>("lavagem").add(
      {
        simples:lavagem.simples,
        master : lavagem.master,
        completa: lavagem.completa,
        valor : lavagem.valor,
        
      }
    )
  }


  get(key){
    return this.firedb.collection<Completa>("lavagem").doc(key).valueChanges();
  }

  update(lavagem:Completa, key:string){
    return this.firedb.collection<Completa>("lavagem").doc(key).update(lavagem  );
  }

  delete(key){
    return this.firedb.collection("lavagem").doc(key).delete();
  }
}