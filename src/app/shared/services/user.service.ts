import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../models/Users";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import firebase from "firebase/compat/app"
import firestore = firebase.firestore;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  collectionName='Users';
  actaulid='';

  constructor(private store: AngularFirestore, private storage: AngularFireStorage) { }

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
  loadProfileImage(imageURL: string){
    return this.storage.ref(imageURL).getDownloadURL();


  }
  setCurrentAd(addid: string, userid: string){
    return this.store.collection<User>(this.collectionName).doc(userid).update({
      lastaddvisitedID: addid,
    })

  }
  setLastVisitedUser(id : string, loggedUser: string){
    return this.store.collection<User>(this.collectionName).doc(loggedUser).update({
      lastvisitedProf: id,
    })

  }
  ratedByUser(loggedUser: string, akitreportolok: string){
    return this.store.collection<User>(this.collectionName).doc(akitreportolok).update({
      ratedByUsers: firestore.FieldValue.arrayUnion(loggedUser)
    })

  }
  alreadyRated(loggedUser: string, akitreportolok: string){
    return this.store.collection<User>(this.collectionName, ref=> ref.where('ratedByUsers','array-contains', loggedUser)
      .where('id', '==', akitreportolok)).valueChanges();
  }
  incrementRating(akitratelekUserID: string, rating: number){
    return this.store.collection<User>(this.collectionName).doc(akitratelekUserID).update({
      ratingPoints: firestore.FieldValue.increment(rating)
    })
  }

}



