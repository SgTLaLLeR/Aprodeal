import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../models/Users";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  collectionName='Users';
  actaulid='';

  constructor(private store: AngularFirestore) { }

  creat(user: User){
    this.actaulid=user.id;
    return this.store.collection<User>(this.collectionName).doc(user.id).set(user);

  }
  getAll(){
    return this.store.collection<User>(this.collectionName).valueChanges();

  }
  update(user:User){
    return this.store.collection<User>(this.collectionName).doc(user.id).set(user);

  }
  delete(id: string){
    return this.store.collection<User>(this.collectionName).doc(id).delete();

  }
  getUserById(userid: string){
    return this.store.collection<User>(this.collectionName, ref => ref.where('id','==', userid)).valueChanges();

  }
}
