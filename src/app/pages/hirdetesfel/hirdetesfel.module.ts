import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HirdetesfelRoutingModule } from './hirdetesfel-routing.module';
import { HirdetesfelComponent } from './hirdetesfel.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    HirdetesfelComponent
  ],
  imports: [
    CommonModule,
    HirdetesfelRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class HirdetesfelModule { }
