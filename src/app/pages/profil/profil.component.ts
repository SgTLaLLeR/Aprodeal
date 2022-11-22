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
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/compat/storage";



@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})

export class ProfilComponent implements OnInit, OnChanges {

  basePath='profile/';
  downloadableURL='';
  task!: AngularFireUploadTask;
  image?: string;
  nevmodel: string='';
  mailmode: string='';
  keresztmodel:string='';
  vezetekmodel:string='';

  users: Array<User>=[];
  editUserForm=new FormGroup({
    username: new FormControl(''),
    email:new FormControl(''),
    imgURL: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
    })
  })
  public flag=false;



  constructor(private authService:AuthService, private afs: AngularFirestore, private userserv: UserService,
              private auth: AngularFireAuth, private router : Router, private  imgstore:AngularFireStorage
  ) { }




  ngOnInit(): void {
    const user=JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userserv.getUserById(user.uid).subscribe(userz=>{
      this.users=userz;
      this.nevmodel=userz[0].username;
      this.mailmode=userz[0].email;
      this.keresztmodel=userz[0].name.lastname;
      this.vezetekmodel=userz[0].name.firstname;
      this.userserv.loadProfileImage(this.users[0].imgURL).subscribe(data=>{
        this.image=data;
      })

      console.log('Szyut',this.users);
    })
    // this.userserv.loadProfileImage(this.users[].imgURL).subscribe(data=>{
    //   this.image=data;
    // })
    console.log('ASDER',this.auth.currentUser);





  }
  async onFileChanged(event:any) {
    const file = event.target.files[0];
    if (file) {
      const filePath = `${this.basePath}/${file.name}`;
      this.task = this.imgstore.upload(filePath, file);

      (await this.task).ref.getDownloadURL().then(url => {
        this.downloadableURL = url;
      });
      console.log(this.downloadableURL);
    } else {
      alert('Nincs fénykép kiválasztva');
      this.downloadableURL = '';
    }
  }
  onSubmit(){
    const urlreg=this.editUserForm.get('imgURL')?.value.split('fakepath\\');
    const userdata=JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    const user: User={
      id: userdata.uid,
      email: this.editUserForm.get('email')?.value,
      username: this.editUserForm.get('username')?.value,
      lastaddvisitedID:'',
      lastvisitedProf:'',
      ratingPoints:0,
      ratedByUsers:[],
      imgURL:'profile/'+urlreg[1],
      name:{
        firstname: this.editUserForm.get('name.firstname')?.value,
        lastname: this.editUserForm.get('name.lastname')?.value

      },

    };
    console.log(this.editUserForm.value);
    this.imgstore.ref('/profile').put(user.imgURL);
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
