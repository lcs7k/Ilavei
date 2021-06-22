import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Completa } from "../models/completa";
import { AngularFirestore } from "@angular/fire/firestore";


@Injectable({
  providedIn: 'root'
})
export class CompletaService {

  constructor(
    private http: HttpClient,
    private firedb: AngularFirestore
  ) { }


  add(completa: Completa) {
    return this.firedb.collection<Completa>("completa").add(
      {
        simples:completa.simples,
        master: completa.master,
        completa: completa.completa,
        valor: completa.valor,
      }
    )
  }

  getAll() {
    //return this.firedb.collection<User>("completa").valueChanges()
    return this.firedb.collection<Completa>("completa").snapshotChanges()

  }

  get(key) {
    return this.firedb.collection<Completa>("completa").doc(key).valueChanges();
  }

  update(user: Completa, key: string) {
    return this.firedb.collection<Completa>("completa").doc(key).update(user);
  }

  delete(key) {
    return this.firedb.collection("completa").doc(key).delete();
  }
}
