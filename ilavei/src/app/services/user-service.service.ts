import { Injectable, Query } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from 'rxjs/operators';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";


@Injectable({
  providedIn: "root"
})
export class UserServiceService {
  constructor(
    private http: HttpClient,
    private firedb: AngularFirestore,
    private auth: AngularFireAuth,
    private router: Router
  ) { }

  add(usuario: User) {
    return this.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha).then(

      res => {
        return this.firedb.collection<User>("usuarios").doc(res.user.uid).set({
          nome: usuario.nome,
          email: usuario.email,
          senha: null,
          foto: usuario.foto,
          key: usuario.key,
          ativo:usuario.ativo

        });

      },
      error => {

      }
    );
  }

  getAll() {
    //return this.firedb.collection<User>("usuarios").valueChanges()
    return this.firedb.collection<User>("usuarios",query => query.where("ativo","==",true) ).snapshotChanges()
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

  get(key) {
    return this.firedb.collection<User>("usuarios").doc(key).valueChanges();
  }

  update(user: User, key: string) {
    return this.firedb.collection<User>("usuarios").doc(key).update(user);
  }

  // delete(key){
  //   return this.firedb.collection("usuarios").doc(key).delete();
  // }

  delete() {
     this.auth.user.subscribe(
     res =>{
     
      return this.firedb.collection("usuarios").doc(res.uid).update({ ativo: false });

     }
   )
  }

  verifuser() {
    return this.auth.user;


  }

  logout() {
    this.auth.signOut().then(
      res => {
        this.router.navigate([""])
      }
    )
  }


}