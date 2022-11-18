import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Hirdetes} from "../models/Hirdetesek";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import firebase from "firebase/compat/app"
import {arrayUnion} from "@angular/fire/firestore";
import {user} from "@angular/fire/auth";
import firestore = firebase.firestore;

@Injectable({
  providedIn: 'root'
})
export class HirdetesService {
  collectionName='Hirdetések';
  currentAdd='';

  constructor(private store:AngularFirestore, private storage:AngularFireStorage) { }

  create(hirdetes : Hirdetes){
    hirdetes.id=this.store.createId();
    return this.store.collection<Hirdetes>(this.collectionName).doc(hirdetes.id.toString()).set(hirdetes);

  }

  getAll(){
    return this.store.collection<Hirdetes>(this.collectionName).valueChanges();
  }

  loadImage(imageURL: string){
    return this.storage.ref(imageURL).getDownloadURL();


  }
  getAddByUserId(userID: string){
    return this.store.collection<Hirdetes>(this.collectionName,ref=> ref.where('userID','==',userID)).valueChanges();
  }
  deleteAdd(id:string){
    return this.store.collection<Hirdetes>(this.collectionName).doc(id).delete();


  }
  update(hirdetes : Hirdetes){
    return this.store.collection<Hirdetes>(this.collectionName).doc(hirdetes.id.toString()).set(hirdetes);
  }
  getAddById(id: string){
    return this.store.collection<Hirdetes>(this.collectionName, ref=> ref.where('id','==',id)).valueChanges();
  }

  reportedByUser(userid: string, id: string) {
    return this.store.collection<Hirdetes>(this.collectionName).doc(id.toString()).update({
      reportedByUserid: firestore.FieldValue.arrayUnion(userid)
    })
  }
  alreadyreported(userid: string, addid: string){
    return this.store.collection<Hirdetes>(this.collectionName, ref => ref.where('reportedByUserid', 'array-contains',userid)
      .where('id', '==', addid)).valueChanges();
  }
  incrementNumber(id: string){
    return this.store.collection<Hirdetes>(this.collectionName).doc(id.toString()).update({
      reportNumbers: firestore.FieldValue.increment(1)
    })
  }
  searchAddByNameSubstr(substr: string){
    return this.store.collection<Hirdetes>(this.collectionName, ref => ref.where('namesearchfield', 'array-contains', substr.toLowerCase())).valueChanges();
  }


}
