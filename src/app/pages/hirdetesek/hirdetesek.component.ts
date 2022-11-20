import {Component, Input, OnInit} from '@angular/core';
import {Hirdetes} from "../../shared/models/Hirdetesek";
import {HirdetesService} from "../../shared/services/hirdetes.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {UserService} from "../../shared/services/user.service";
import * as firebase from "firebase/compat";
import {Router} from "@angular/router";
import {user} from "@angular/fire/auth";

@Component({
  selector: 'app-hirdetesek',
  templateUrl: './hirdetesek.component.html',
  styleUrls: ['./hirdetesek.component.scss']
})
export class HirdetesekComponent implements OnInit {

  constructor(private  serv: HirdetesService, private storage: AngularFireStorage, private userserv: UserService,private  router: Router) { }
  hirdetesek: Array<Hirdetes>=[];


  image?:Array<string>=[];

  ngOnInit(): void {
    this.serv.getAll().subscribe(adds=>{
      this.hirdetesek=adds;
      for(let i=0;i<this.hirdetesek.length;i++){
        this.serv.loadImage(this.hirdetesek[i].imageURL).subscribe(data=>{
          this.image=data;
          this.hirdetesek[i].imageURL=data;

        })
      }

    })


  }
  loadImage(){

  }
  setCurrentAdd(id: string){
    this.serv.currentAdd=id;
    const userdata=JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    if(userdata ===null){
      alert('Jelentkezz be a hírdetés megtekintéséhe!');
    }

    this.userserv.setCurrentAd(id,userdata.uid);
  }






}
