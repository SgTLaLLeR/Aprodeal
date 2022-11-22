import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherprofRoutingModule } from './otherprof-routing.module';
import { OtherprofComponent } from './otherprof.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxStarRatingModule} from "ngx-star-rating";


@NgModule({
  declarations: [
    OtherprofComponent
  ],
    imports: [
        CommonModule,
        OtherprofRoutingModule,
        MatButtonModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        NgxStarRatingModule,

    ]
})
export class OtherprofModule { }
