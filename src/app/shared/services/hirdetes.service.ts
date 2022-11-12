import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Hirdetes} from "../models/Hirdetesek";
import {from, Observable, switchMap} from "rxjs";
import {getDownloadURL, ref, Storage, uploadBytes} from "@angular/fire/storage";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {arrayUnion, FieldValue} from "@angular/fire/firestore";
import {user} from "@angular/fire/auth";

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

  reportedByUser(userid: string, id: string){
   // return this.store.collection<Hirdetes>(this.collectionName).doc(id.toString()).update({
   //    reportedByUserid : FieldValue.arrayUnion(userid)
   //  });

  }

}
