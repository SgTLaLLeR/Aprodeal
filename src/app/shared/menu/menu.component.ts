import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {log} from "util";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit , AfterViewInit {


  @Input() loggedInUser?: firebase.default.User | null;
  @Output() selectedPage: EventEmitter<string> =new EventEmitter();
  @Output() onCloseSidenav: EventEmitter<boolean>=new EventEmitter();
  @Output() onLogout: EventEmitter<boolean>=new EventEmitter();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    this.authService.isUserLoggedIn().subscribe(user=>{
      this.loggedInUser=user;
      localStorage.setItem('user',JSON.stringify(this.loggedInUser));
    },error=>{
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    })
  }
  menuSwitch(pageValue: string){
    this.selectedPage.emit(pageValue);

  }
  close(logout?:boolean){
    if (logout===true){
      this.onLogout.emit(logout);

    }
    this.onCloseSidenav.emit(true);
  }

}
