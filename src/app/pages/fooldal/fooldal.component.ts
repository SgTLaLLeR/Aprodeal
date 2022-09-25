import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fooldal',
  templateUrl: './fooldal.component.html',
  styleUrls: ['./fooldal.component.scss']
})
export class FooldalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getUrl(){
    return "url(./assets/wallpaper.jpg)";
  }

}
