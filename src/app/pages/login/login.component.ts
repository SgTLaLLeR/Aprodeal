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
  emailForgot: string='';
  ForgotFlag: boolean=false;
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
      if(cred.user?.emailVerified == true){
        this.router.navigateByUrl('/fooldal');
      }else{
        alert('Hitelesítsd az email címed');
      }





    }).catch(error=>{
      console.error(error);
      alert("Nem sikerült a bejelntkezés!");
      this.flag=true;

    });

  }

  desetForgotFlag(){
    this.ForgotFlag=false;
    this.authService.forgotPassword(this.emailForgot);
    this.emailForgot='';
  }
  setForgotFlag(){
    this.ForgotFlag=true;


  }


}
