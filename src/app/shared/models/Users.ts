import firebase from "firebase/compat";
import firestore = firebase.firestore;

export interface User{
  id: string;
  email:string;
  username: string;
  lastaddvisitedID: string;
  lastvisitedProf:string;
  ratingPoints: number | firestore.FieldValue;
  ratedByUsers: string[] | firestore.FieldValue;
  name:{
    firstname:string;
    lastname:string;

  }
  imgURL: string;
  // lakcim:{
  //   zipcode:number;
  //   megye:string;
  //   varos:string;
  //   utcahaz:string;
  //
  // }

}
