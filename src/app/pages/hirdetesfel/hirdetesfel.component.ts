import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {HirdetesService} from "../../shared/services/hirdetes.service";
import {Hirdetes} from "../../shared/models/Hirdetesek";
import {Firestore} from "@angular/fire/firestore";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireStorage} from "@angular/fire/compat/storage";



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


  constructor(private authService: AuthService, private router: Router, private hirdetesService: HirdetesService, private imgstore: AngularFireStorage) { }

  ngOnInit(): void {
  }
  onSubmit(){

    //this.router.navigateByUrl('/#');
    const hirdetes: Hirdetes={
      id:'',
      nev:this.hirdetesfelForm.get('nev')?.value,
      ar:this.hirdetesfelForm.get('ar')?.value,
      leiras:this.hirdetesfelForm.get('leiras')?.value,
      elerhetoseg:this.hirdetesfelForm.get('elerhetoseg')?.value,
      imageURL:this.hirdetesfelForm.get('imageURL')?.value





    };
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
    this.imgstore.upload(this.path, this.path);

  }


}
