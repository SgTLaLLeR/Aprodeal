import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HirdeteseimRoutingModule } from './hirdeteseim-routing.module';
import { HirdeteseimComponent } from './hirdeteseim.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    HirdeteseimComponent
  ],
    imports: [
        CommonModule,
        HirdeteseimRoutingModule,
        MatTableModule,
        MatIconModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule
    ]
})
export class HirdeteseimModule { }
