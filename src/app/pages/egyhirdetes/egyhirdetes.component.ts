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
  //logolt user
  user: Array<User>=[];
  currentUser: Array<User>=[];
  reportFlag: boolean =true;

  constructor(private serv: HirdetesService , private usersev: UserService) { }

  ngOnInit(): void {
    this.kiratas()



  }
  reportAdd(addid: string, userid:string) {
    this.serv.alreadyreported(this.user[0].id, addid).subscribe(data=>{
      console.log('miez: ',data)
      if(data.length!=0){
        console.log('true');
      }else{
        console.log('false');
        this.serv.reportedByUser(this.user[0].id, addid);
        this.serv.incrementNumber(this.hirdetes[0].id);
      }
    })
  }
  kiratas(){
    const userdata=JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.usersev.getUserById(userdata.uid).subscribe(data =>{
      this.user=data;
      console.log('CurrUser: ', data)
      this.serv.getAddById(this.user[0].lastaddvisitedID).subscribe(data =>{
        this.hirdetes=data;
      })

        this.serv.loadImage(this.hirdetes[0].imageURL).subscribe(data=>{
          this.image=data;
        })
          this.usersev.getUserById(this.hirdetes[0].userID).subscribe(data =>{
            this.currentUser=data;
          });


      this.serv.visitCounter(this.hirdetes[0].id);
    })


  }
  setClickedUser(id: string){
    const userdata=JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.usersev.setLastVisitedUser(id,userdata.uid);


  }


}
