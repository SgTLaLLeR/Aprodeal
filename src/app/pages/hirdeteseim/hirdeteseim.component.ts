import { Component, OnInit } from '@angular/core';
import {Hirdetes} from "../../shared/models/Hirdetesek";
import {HirdetesService} from "../../shared/services/hirdetes.service";
import * as firebase from "firebase/compat";
import {FormControl, FormGroup} from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/compat/storage";


@Component({
  selector: 'app-hirdeteseim',
  templateUrl: './hirdeteseim.component.html',
  styleUrls: ['./hirdeteseim.component.scss']
})
export class HirdeteseimComponent implements OnInit {

  constructor( private  serv: HirdetesService, private imgstore: AngularFireStorage) { }
  hirdetesek: Array<Hirdetes>=[];
  image?:Array<string>=[];
  flag: boolean = true;
  current_row_id?: string;
  basePath='images/';
  downloadableURL='';
  task!: AngularFireUploadTask;
  currentImage?: string;

  editAddsForm=new FormGroup({
    nev: new FormControl(''),
    ar: new FormControl(''),
    leiras: new FormControl(''),
    elerhetoseg: new FormControl(''),
    imageURL: new FormControl('')

  })

  ngOnInit(): void {
    const user=JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.serv.getAddByUserId(user.uid).subscribe(adds=>{
      this.hirdetesek=adds;
      for(let i=0;i<this.hirdetesek.length;i++){
        this.serv.loadImage(this.hirdetesek[i].imageURL).subscribe(data=>{
          this.image=data;
          this.hirdetesek[i].imageURL=data;

        })
      }

    })


  }
  deleteAdd(id:string){
    this.serv.deleteAdd(id).then(_=>{
      alert('Sikeresen törölted a hirdetésed!');
    }).catch(error=>{
      console.log(error);
    })
  }
  updateAdd(id:string){

  }
  onSubmit(){
    const user=JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    const urlreg=this.editAddsForm.get('imageURL')?.value.split('fakepath\\');
    const hirdetes: Hirdetes={
      id:this.current_row_id!,
      nev:this.editAddsForm.get('nev')?.value,
      ar:this.editAddsForm.get('ar')?.value,
      leiras:this.editAddsForm.get('leiras')?.value,
      elerhetoseg:this.editAddsForm.get('elerhetoseg')?.value,
      imageURL:'images/'+urlreg[1],
      reportedByUserid:[],
      reportNumbers:0,
      userID:user.uid

    }
    this.imgstore.ref('/images').put(hirdetes.imageURL);
    this.serv.update(hirdetes).then(_=>{
      console.log('Sikeres adatmodosítás');
      alert('Sikeres adat módosítás');
    }).catch(error =>{
      console.error(error);
      alert('Nem sikerült az adatmódosítás');
    })
    this.flag=true;
  }

  desetFlag(){
    this.flag=false;
  }
  setFlag(){
    this.flag=true;
  }
  currentId(id: string){
    this.current_row_id=id;
  }
  async onFileChanged(event:any) {
    const file = event.target.files[0];
    if (file) {
      const filePath = `${this.basePath}/${file.name}`;
      this.task = this.imgstore.upload(filePath, file);

      (await this.task).ref.getDownloadURL().then(url => {
        this.downloadableURL = url;
      });
      console.log(this.downloadableURL);
    } else {
      alert('Nincs fénykép kiválasztva');
      this.downloadableURL = '';
    }
  }

}
