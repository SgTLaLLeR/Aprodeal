import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilComponent } from './profil.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ProfilComponent
  ],
    imports: [
        CommonModule,
        ProfilRoutingModule,
        MatInputModule,
        ReactiveFormsModule
    ]
})
export class ProfilModule { }
