import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/Users";
import {UserService} from "../../shared/services/user.service";
import * as firebase from "firebase/compat";
import {HirdetesService} from "../../shared/services/hirdetes.service";
import {FormControl, FormGroup} from "@angular/forms";



@Component({
  selector: 'app-otherprof',
  templateUrl: './otherprof.component.html',
  styleUrls: ['./otherprof.component.scss']
})
export class OtherprofComponent implements OnInit {
  CurrentUser: Array<User>=[];
  LoggedUser: Array<User>=[];
  image?: string;
  userdata=JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
  addsNumber: number =0;
  rating: any =0;
  ratingDivide: any=0;
  dividedRating: number=0;
  form=new FormGroup({
    rating: new FormControl(''),
  })

  constructor(private serv : UserService, private addserv: HirdetesService) { }

  ngOnInit(): void {
    this.serv.getUserById(this.userdata.uid).subscribe(data =>{
      this.LoggedUser=data;
      this.serv.getUserById(this.LoggedUser[0].lastvisitedProf).subscribe(data =>{
        this.CurrentUser=data;
        this.rating=data[0].ratingPoints;
        this.ratingDivide=data[0].ratedByUsers


        this.addserv.getAddByUserId(this.CurrentUser[0].id).subscribe(data =>{
          this.addsNumber=data.length;
        })
        this.serv.loadProfileImage(this.CurrentUser[0].imgURL).subscribe(data =>{
          this.image=data;
        })
      })


    })

  }
  rateUser(id: string){
    const rateASD=this.form.get('rating')?.value;
    this.serv.alreadyRated(this.LoggedUser[0].id, id).subscribe(data =>{
      if(data.length!=0){
        console.log('Már ratingelted!');


      }else{
        console.log('Rated');
        this.serv.ratedByUser(this.LoggedUser[0].id, id);
        this.serv.incrementRating(this.CurrentUser[0].id, rateASD);
        alert('Sikeresen értékelted a felhasználót!')
      }
    })
  }










}
