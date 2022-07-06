import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../shared/services/auth.service";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email=new FormControl('')
  password=new FormControl('')
  flag : boolean=false;
  loading: boolean=false;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
  async login(){

    /*

    if (this.email.value==='test@gmail.com' && this.password.value=='testpw'){
      this.router.navigateByUrl('/fooldal');
    } else{
      console.error('Incorrect')
    }*/
    this.authService.login(this.email.value,this.password.value).then(cred=>{
      console.log(cred);




      this.router.navigateByUrl('/fooldal');
    }).catch(error=>{
      console.error(error);
      this.flag=true;

    });

  }


}
