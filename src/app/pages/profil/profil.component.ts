import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Auth, deleteUser, getAuth, user} from "@angular/fire/auth";
import {getDatabase, onValue, ref} from "@angular/fire/database";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../../shared/models/Users";
import {UserService} from "../../shared/services/user.service";
import {FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import * as firebase from 'firebase/compat';
import {Router} from "@angular/router";



@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})

export class ProfilComponent implements OnInit, OnChanges {



  users: Array<User>=[];
  editUserForm=new FormGroup({
    username: new FormControl(''),
    email:new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
    })
  })
  public flag=false;



  constructor(private authService:AuthService, private afs: AngularFirestore, private userserv: UserService, private auth: AngularFireAuth, private router : Router) { }




  ngOnInit(): void {
    const user=JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userserv.getUserById(user.uid).subscribe(userz=>{
      this.users=userz;
      console.log(this.users);
    })
    console.log('ASDER',this.auth.currentUser);



  }
  onSubmit(){
    const userdata=JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    const user: User={
      id: userdata.uid,
      email: this.editUserForm.get('email')?.value,
      username: this.editUserForm.get('username')?.value,
      name:{
        firstname: this.editUserForm.get('name.firstname')?.value,
        lastname: this.editUserForm.get('name.lastname')?.value

      },

    };
    console.log(this.editUserForm.value);
    this.userserv.update(user).then(_=>{
      console.log('Sikeres adatmódosítás');
      this.flag=false;
    }).catch(error=>{
      console.error(error);
    })
  }

  async deleteUser(){
    this.auth.currentUser.then((user)=>{
      user?.delete();
    })
    this.router.navigateByUrl('/login');

    // const userdata=JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    //
    //
    // this.userserv.delete(userdata.uid).then(_=>{
    //   console.log('Sikeres törlés');
    // }).catch(error=>{
    //   console.error(error);
    // })



  }
  setFlag(){
    this.flag=true;
  }
  desetFlag(){
    this.flag=false;
  }


  ngOnChanges(): void {

  }


}
