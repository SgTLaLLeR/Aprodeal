import { Component, OnInit } from '@angular/core';
import {HirdetesService} from "../../shared/services/hirdetes.service";
import {Hirdetes} from "../../shared/models/Hirdetesek";
import {UserService} from "../../shared/services/user.service";
import {User} from "../../shared/models/Users";

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

  constructor(private serv: HirdetesService , private usersev: UserService) { }

  ngOnInit(): void {
    this.serv.getAddById(this.serv.currentAdd).subscribe(data=>{
      this.hirdetes=data;
      this.serv.loadImage(this.hirdetes[0].imageURL).subscribe(data=>{
        this.image=data;
      })
      this.usersev.getUserById(this.hirdetes[0].userID).subscribe(data=>{
        this.user=data;
        console.log(data)
      })
    })

  }
  reportAdd(addid: string, userid:string){
    this.serv.reportedByUser(userid,addid);
  }

}
