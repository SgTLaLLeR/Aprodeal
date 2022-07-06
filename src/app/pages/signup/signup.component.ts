import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Location} from "@angular/common";
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../shared/models/Users";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm=new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repassword: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
    // lakcim: new FormGroup({
    //   zipcode: new FormControl(''),
    //   megye: new FormControl(''),
    //   varos: new FormControl(''),
    //   utcahaz: new FormControl(''),
    // })
    })

  });

  constructor(private location: Location, private authService: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.signUpForm.value);
    this.authService.signup(this.signUpForm.get('email')?.value,this.signUpForm.get('password')?.value).then(cred=>{
      console.log(cred);
      this.router.navigateByUrl('/login');
      const user: User={
        id: cred.user?.uid as string,
        email: this.signUpForm.get('email')?.value,
        username: this.signUpForm.get('username')?.value,
        name:{
          firstname: this.signUpForm.get('name.firstname')?.value,
          lastname: this.signUpForm.get('name.lastname')?.value
        },
        // lakcim:{
        //   zipcode: this.signUpForm.get('lakcim.zipcode')?.value,
        //   megye: this.signUpForm.get('lakcim.megye')?.value,
        //   varos: this.signUpForm.get('lakcim.varos')?.value,
        //   utcahaz: this.signUpForm.get('lakcim.utcahaz')?.value,
        //
        //
        // }

      };
      this.userService.creat(user).then(_=>{
        console.log('Siekeres beszuras');
      }).catch(error =>{
        console.error(error);
      })

    }).catch(error=>{
      console.error(error);
    })
  }
  goBack(){
    this.location.back();
  }

}
