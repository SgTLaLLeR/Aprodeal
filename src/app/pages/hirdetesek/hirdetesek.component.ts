import {Component, Input, OnInit} from '@angular/core';
import {Hirdetes} from "../../shared/models/Hirdetesek";
import {HirdetesService} from "../../shared/services/hirdetes.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-hirdetesek',
  templateUrl: './hirdetesek.component.html',
  styleUrls: ['./hirdetesek.component.scss']
})
export class HirdetesekComponent implements OnInit {

  constructor(private  serv: HirdetesService, private storage: AngularFireStorage) { }
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






}
