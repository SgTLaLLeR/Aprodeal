import firebase from "firebase/compat";
import firestore = firebase.firestore;

export interface Hirdetes{
  id: string;
  nev: string;
  ar:string;
  leiras:string;
  elerhetoseg: string;
  imageURL: string;
  namesearchfield: string[];
  reportedByUserid: string[] | firestore.FieldValue;
  reportNumbers: number | firestore.FieldValue;
  userID: string;


}
