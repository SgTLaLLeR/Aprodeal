import { Component, OnInit } from '@angular/core';
import {HirdetesService} from "../../shared/services/hirdetes.service";
import {Hirdetes} from "../../shared/models/Hirdetesek";
import {UserService} from "../../shared/services/user.service";
import {User} from "../../shared/models/Users";
import * as firebase from "firebase/compat";

@Component({
  selector: 'app-egyhirdetes',
  templateUrl: './egyhirdetes.component.html',
  styleUrls: ['./egyhirdetes.component.scss']
})
export class EgyhirdetesComponent implements OnInit {
  hirdetes: Array<Hirdetes>=[];
  image?: string;
  user: Array<User>=[];
  currentUser: Array<User>=[];
  reportFlag: boolean =true;

  constructor(private serv: HirdetesService , private usersev: UserService) { }

  ngOnInit(): void {
    const userdata=JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.usersev.getUserById(userdata.uid).subscribe(data =>{
      this.user=data;
      console.log('CurrUser: ', data)
      this.serv.getAddById(this.user[0].lastaddvisitedID).subscribe(data =>{
        this.hirdetes=data;
        this.serv.loadImage(this.hirdetes[0].imageURL).subscribe(data=>{
          this.image=data;
        })
    })
    })
    // this.serv.getAddById(this.serv.currentAdd).subscribe(data=>{
    //   this.hirdetes=data;
    //   this.serv.loadImage(this.hirdetes[0].imageURL).subscribe(data=>{
    //     this.image=data;
    //   })
    //   this.usersev.getUserById(this.hirdetes[0].userID).subscribe(data=>{
    //     this.user=data;
    //     console.log(data)
    //   })
    //
    // })

  }
  reportAdd(addid: string, userid:string){
    this.serv.reportedByUser(userid,addid);
    this.serv.alreadyreported(this.user[0].id,this.hirdetes[0].id).subscribe(data =>{
      console.log('lenyeg: ', data.length);
      if(data.length!=0){
        this.reportFlag=false;
      }else {
        this.serv.incrementNumber(this.hirdetes[0].id);
      }
    })

  }

}
