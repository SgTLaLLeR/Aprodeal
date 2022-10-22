import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {User} from "../models/Users";
import {Hirdetes} from "../models/Hirdetesek";
import {setUserId} from "@angular/fire/analytics";
import {Auth, authState, beforeAuthStateChanged, getAuth, onAuthStateChanged, user} from "@angular/fire/auth";



@Injectable({
  providedIn: 'root'
})
export class AuthService {




  constructor(private auth: AngularFireAuth, public store: AngularFirestore) { }





  login(email: string, password: string){

    return this.auth.signInWithEmailAndPassword(email,password);
  }

  signup(email:string, password: string){
   return this.auth.createUserWithEmailAndPassword(email,password);
  }

  isUserLoggedIn(){
    return this.auth.user;
  }

  logout(){
    return  this.auth.signOut();
  }

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.store.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      id: user.id,
      email: user.email,
      username: user.username,
      name:{
        firstname: user.firstname,
        lastname: user.lastname,

      }


    };
    return userRef.set(userData, {
      merge: true,
    });
  }


}
