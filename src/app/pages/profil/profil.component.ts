import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Auth, getAuth, user} from "@angular/fire/auth";
import {getDatabase, onValue, ref} from "@angular/fire/database";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../../shared/models/Users";
import {UserService} from "../../shared/services/user.service";
import {FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";



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



  constructor(private authService:AuthService, private afs: AngularFirestore, private userserv: UserService) { }




  ngOnInit(): void {
    const user=JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userserv.getUserById(user.uid).subscribe(userz=>{
      this.users=userz;
      console.log(this.users);
    })



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

      }
    };
    console.log(this.editUserForm.value);
    this.userserv.update(user).then(_=>{
      console.log('Sikeres adatmódosítás');
    }).catch(error=>{
      console.error(error);
    })
  }

  deleteUser(){
    const userdata=JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;

    this.userserv.delete(userdata.uid).then(_=>{
      console.log('Sikeres törlés');
    }).catch(error=>{
      console.error(error);
    })
    
    this.authService.logout();
  }


  ngOnChanges(): void {

  }


}
