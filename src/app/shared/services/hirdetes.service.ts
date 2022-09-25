import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Hirdetes} from "../models/Hirdetesek";
import {from, Observable, switchMap} from "rxjs";
import {getDownloadURL, ref, Storage, uploadBytes} from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class HirdetesService {
  collectionName='Hirdetések';

  constructor(private store:AngularFirestore) { }

  create(hirdetes : Hirdetes){
    hirdetes.id=this.store.createId();
    return this.store.collection<Hirdetes>(this.collectionName).doc(hirdetes.id.toString()).set(hirdetes);

  }



}
