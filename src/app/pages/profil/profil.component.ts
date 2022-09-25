import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {


  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }


}
