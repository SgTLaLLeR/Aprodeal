import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {User} from "../models/Users";
import {Hirdetes} from "../models/Hirdetesek";
import {setUserId} from "@angular/fire/analytics";
import {
  Auth,
  authState,
  beforeAuthStateChanged,
  deleteUser,
  getAuth,
  onAuthStateChanged,
  user
} from "@angular/fire/auth";
import * as firebase from 'firebase/compat';



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
  deleteAuthUser(){
    // @ts-ignore


  }
  forgotPassword(email: string){
    this.auth.sendPasswordResetEmail(email).then(()=>{

    }, err =>{
      alert('Error');
    })
  }
  sendEmail(user: any) {
    user.sendEmailVerification();
  }






}
