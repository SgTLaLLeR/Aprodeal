import { Component, OnInit } from '@angular/core';
import {Hirdetes} from "../../shared/models/Hirdetesek";
import {HirdetesService} from "../../shared/services/hirdetes.service";
import * as firebase from "firebase/compat";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  hirdetesek: Array<Hirdetes>=[];
  image?:Array<string>[];
  searchTerm='';
  flag: boolean=false;
  constructor(private serv: HirdetesService, private userserv: UserService) { }

  ngOnInit(): void {

  }
  search() {
    this.serv.searchAddByNameSubstr(this.searchTerm).subscribe(data => {
      this.hirdetesek=data;
      for(let i=0;i<this.hirdetesek.length;i++){
        this.serv.loadImage(this.hirdetesek[i].imageURL).subscribe(data=>{
          this.image=data;
          this.hirdetesek[i].imageURL=data;

        })
      }
      this.flag=true;
      console.log(this.hirdetesek);

    })
  }
  setCurrentAdd(id: string){
    this.serv.currentAdd=id;
    const userdata=JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userserv.setCurrentAd(id,userdata.uid);
  }


}
