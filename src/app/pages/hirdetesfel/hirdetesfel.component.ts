import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {HirdetesService} from "../../shared/services/hirdetes.service";
import {Hirdetes} from "../../shared/models/Hirdetesek";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/compat/storage";
import * as firebase from "firebase/compat";



@Component({
  selector: 'app-hirdetesfel',
  templateUrl: './hirdetesfel.component.html',
  styleUrls: ['./hirdetesfel.component.scss']
})
export class HirdetesfelComponent implements OnInit {
  hirdetesfelForm=new FormGroup({
    nev: new FormControl(''),
    ar: new FormControl(''),
    leiras: new FormControl(''),
    elerhetoseg: new FormControl(''),
    imageURL: new FormControl(''),
  });


  constructor(private authService: AuthService, private router: Router, private hirdetesService: HirdetesService, private imgstore: AngularFireStorage,) { }
  basePath='images/';
  downloadableURL='';
  namesearch: string[]=[];
  task!: AngularFireUploadTask;



  ngOnInit(): void {
  }
  async onFileChanged(event:any){
    const file=event.target.files[0];
    if(file){
      const filePath=`${this.basePath}/${file.name}`;
      this.task=this.imgstore.upload(filePath,file);

      (await this.task).ref.getDownloadURL().then(url => {this.downloadableURL = url; });
      console.log(this.downloadableURL);
    }else{
      alert('Nincs fénykép kiválasztva');
      this.downloadableURL='';
    }

  }
  onSubmit(){
    const name=this.hirdetesfelForm.get('nev')?.value;
    const splitted=name.split(" ");
    for(let i=1; i<=splitted.length;i++){
      for(let j=1;j<=splitted[i].length;j++){
        this.namesearch.push(splitted[i].substring(0,j).toLowerCase())
      }
    }
    console.log('SPLITTED:', splitted);
    const user=JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    const urlreg=this.hirdetesfelForm.get('imageURL')?.value.split('fakepath\\');
    //this.router.navigateByUrl('/#');
    const hirdetes: Hirdetes={
      id:'',
      nev:this.hirdetesfelForm.get('nev')?.value,
      ar:this.hirdetesfelForm.get('ar')?.value,
      leiras:this.hirdetesfelForm.get('leiras')?.value,
      elerhetoseg:this.hirdetesfelForm.get('elerhetoseg')?.value,
      imageURL:'images/'+urlreg[1],
      reportedByUserid: [],
      namesearchfield:this.namesearch,
      reportNumbers:0,
      userID:user.uid





    };
    this.imgstore.ref('/images').put(hirdetes.imageURL);
    this.hirdetesService.create(hirdetes).then(_=>{
      console.log('Siekeres beszuras');
    }).catch(error=>{
      console.error(error);
    })

  }
  path='/images'
  upload(event : any){
    this.path=event.target.files[0]
    console.log(this.path)

  }
  uploadimg(){


  }



}
