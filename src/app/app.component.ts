import { Component } from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {Router} from "@angular/router";
import {AuthService} from "./shared/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Aprodeal';
  page='main';
  loggedInUser?: firebase.default.User | null;
  //_router: string;

  constructor(public router: Router, private authService: AuthService ) {
    //this._router = router.url;
  }

  ngOnInit(){
    this.authService.isUserLoggedIn().subscribe(user=>{
      this.loggedInUser=user;
      localStorage.setItem('user',JSON.stringify(this.loggedInUser));
    },error=>{
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    })
  }

  changePage(selectedPage: string){
    this.page=selectedPage;
  }

  onToggleSidenav(sidenav: MatSidenav ){
    sidenav.toggle();
  }
  onClose(event: any, sidenav: MatSidenav){
    if(event===true){
      sidenav.close();
    }
  }
  logout(_?: boolean){
    this.authService.logout().then(() =>{
      console.log('Sikeres kilepes');
    }).catch(error=>{
      console.error(error);
    });

  }

}
